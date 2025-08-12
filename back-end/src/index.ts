import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import { Client } from '@notionhq/client'; 

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Configuração do cliente Notion
const notion = new Client({ auth: process.env.NOTION_API_KEY });

// Função para mapear propriedades do Notion
const mapNotionProperties = (page: any) => {
  const { properties } = page;
  
  const getText = (propertyName: string) => {
    const prop = properties[propertyName];
    if (!prop) return '';
    return prop.rich_text?.[0]?.plain_text || 
           prop.text?.[0]?.plain_text || 
           '';
  };

  const getImage = (propertyName: string) => {
    const prop = properties[propertyName];
    if (!prop || !prop.files || prop.files.length === 0) return '';
    return prop.files[0]?.file?.url || '';
  };

  return {
    id: page.id,
    imagePostBanner1: getImage('imagePostBanner1'),
    author: getText('AuthorPostBanner'),
    date: getText('datePostBanner'),
    title: getText('titlePostBanner'),
    initText: getText('initialTextNotice'),
    title1Notice: getText('title1Notice'),
    descriptionTitle1Notice: getText('descriptionTitle1Notice'),
    image1Notice: getImage('image1Notice'),
    textAfterImage1Notice: getText('textAfterImage1Notice'),
    listItem1Notice: getText('listItem1Notice'),
    listItem2Notice: getText('listItem2Notice'),
    listItem3Notice: getText('listItem3Notice'),
    listItem4Notice: getText('listItem4Notice'),
    subtitleNotice: getText('subtitleNotice'),
    afterSubtitleText1Notice: getText('afterSubtitleText1Notice'),
    afterSubtitleText2Notice: getText('afterSubtitleText2Notice'),
    Title2Notice: getText('Title2Notice'),
    afterTitle2Text1Notice: getText('afterTitle2Text1Notice'),
    afterTitle2Text2Notice: getText('afterTitle2Text2Notice'),
    afterTitle2Text3Notice: getText('afterTitle2Text3Notice'),
    image2Notice: getImage('image2Notice'),
    imgLegend: getText('imgLegend'),
    afterImage2Text1: getText('afterImage2Text1'),
    afterImage2Text2: getText('afterImage2Text2'),
    category : getText('category'),
    highlight : getText('highlight'),
    sequence : getText('sequence'),
    forWho : getText('forWho'),
    btnProjetcts : getText('btnProjetcts'),
    colorCard : getText('colorCard'),
    descriptionCard : getText('descriptionCard'),
    titleCard : getText('titleCard'),
    subtitleCard : getText('subtitleCard'),
    imageCard : getImage('imageCard'),
  };
};

// Rota para buscar um post específico
app.get('/api/notion/post/:id', async (req, res) => {
  try {
    const pageId = req.params.id;
    const page = await notion.pages.retrieve({ page_id: pageId });
    const mappedPost = mapNotionProperties(page);
    res.json(mappedPost);
  } catch (error) {
    console.error('Erro ao buscar post:', error);
    res.status(500).json({ error: 'Falha ao carregar o post' });
  }
});

// Rota para buscar todos os posts
app.get('/api/notion/posts', async (req, res) => {
  try {
    const databaseId = process.env.NOTION_DATABASE_ID!;
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [{
        property: "datePostBanner",
        direction: "descending"
      }]
    });
    
    const posts = response.results.map(mapNotionProperties);
    res.json(posts);
  } catch (error) {
    console.error('Erro ao buscar posts:', error);
    res.status(500).json({ error: 'Falha ao carregar posts' });
  }
});
// Envio de Email
app.post('/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Mensagem de ${name}`,
      text: message +" " + email,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Erro ao enviar e-mail:', err);
    res.status(500).json({ success: false, error: 'Erro ao enviar e-mail' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
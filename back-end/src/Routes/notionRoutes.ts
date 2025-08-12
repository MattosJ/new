import express from 'express';
import { Client } from '@notionhq/client';

const router = express.Router();

const notion = new Client({ auth: process.env.NOTION_API_KEY });

// Interface para tipar o retorno
export interface NotionPost {
  id: string;
  imagePostBanner: string;
  author: string;
  date: string;
  title: string;
  initText: string;
  title1Notice: string;
  descriptionTitle1Notice: string;
  image1Notice: string;
  textAfterImage1Notice: string;
  listItem1Notice: string;
  listItem2Notice: string;
  listItem3Notice: string;
  listItem4Notice: string;
  subtitleNotice: string;
  afterSubtitleText1Notice: string;
  afterSubtitleText2Notice: string;
  Title2Notice: string;
  afterTitle2Text1Notice: string;
  afterTitle2Text2Notice: string;
  afterTitle2Text3Notice: string;
  image2Notice: string;
  imgLegend: string;
  afterImage2Text1: string;
  afterImage2Text2: string;
  category : string;
  highlight : string;
  sequence : string;
  forWho : string;
  btnProjetcts : string;
  colorCard : string;
  descriptionCard : string;
  titleCard : string;
  subtitleCard : string;
  imageCard : string;
}

// Função auxiliar para mapear propriedades
const mapNotionProperties = (page: any): NotionPost => {
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
    imagePostBanner: getImage('imagePostBanner'),
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
    category: getText('category'),
    highlight: getText('highlight'),
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
router.get('/post/:id', async (req, res) => {
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
router.get('/posts', async (req, res) => {
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
    res.status(500).json({ error: 'Falha ao carregar posts' as string });
  }
});

export default router;
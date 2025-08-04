// Interface para o post do Notion
export interface NotionPost {
  id: string;
  imagePostBanner1: string;
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
  highlight : string,
  sequence: string,
}

// URL base do backend - ajuste para sua configuração
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001';

// Buscar um post específico
export const fetchNewsPost = async (pageId: string): Promise<NotionPost> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/notion/post/${pageId}`);
    if (!response.ok) {
      throw new Error('Falha ao carregar o post');
    }
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar post:", error);
    throw new Error("Falha ao carregar o post");
  }
};

// Buscar todos os posts
export const fetchAllPosts = async (): Promise<NotionPost[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/notion/posts`);
    if (!response.ok) {
      throw new Error('Falha ao carregar posts');
    }
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar posts:", error);
    throw new Error("Falha ao carregar posts");
  }
};
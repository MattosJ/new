import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import HeaderInternal from "../components/Header";
import PostBanner from "../components/PostBanner";
import PostContainer from "../components/PostContainer";
import '../components/styles/Pages.css';
import { fetchNewsPost, fetchAllPosts, NotionPost } from "../services/notion"; 

const NewsPostProjects = () => {
  const { id } = useParams<{ id: string }>();
  const [postData, setPostData] = useState<NotionPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [recentPosts, setRecentPosts] = useState<NotionPost[]>([]); 

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;
      try {
        setLoading(true);
        const properties = await fetchNewsPost(id);
        setPostData(properties);
        setError(null);
      } catch (err) {
        console.error("Erro ao buscar dados:", err);
        setError("Falha ao carregar o post");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  // Carregar posts recentes
useEffect(() => {
  const loadRecentPosts = async () => {
    try {
      const allPosts = await fetchAllPosts();

      const onlyProjects = allPosts.filter(
        post => post.category?.toLowerCase() === "projeto"
      );

      setRecentPosts(onlyProjects.slice(0, 3)); 
    } catch (err) {
      console.error("Erro ao buscar posts recentes:", err);
    }
  };

  loadRecentPosts();
}, []);

  if (loading) return <div className="loading">Carregando...</div>;
  if (error) return <div>{error}</div>;
  if (!postData) return <div>Post não encontrado</div>;

  return (
    <div>
      <HeaderInternal />
      <div className="Content">
        <PostBanner
          Image={postData.imagePostBanner1}
          linkText="<Voltar a páginas de projetos"
          linkTo="/projetos"
          author={postData.author}
          date={postData.date}
          title={postData.title}
        />

        <PostContainer
          bodyNoticeProps={{
            initText: postData.initText,
            title1: postData.title1Notice,
            descriptionTitle1: postData.descriptionTitle1Notice,
            image: postData.image1Notice,
            textAfterImage: postData.textAfterImage1Notice,
            listItem1: postData.listItem1Notice,
            listItem2: postData.listItem2Notice,
            listItem3: postData.listItem3Notice,
            listItem4: postData.listItem4Notice,
            subtitle: postData.subtitleNotice,
            afterSubtitleText: postData.afterSubtitleText1Notice,
            afterSubtitleText2: postData.afterSubtitleText2Notice,
            title2: postData.Title2Notice,
            afterTitle2Text1: postData.afterTitle2Text1Notice,
            afterTitle2Text2: postData.afterTitle2Text2Notice,
            afterTitle2Text3: postData.afterTitle2Text3Notice,
            image2: postData.image2Notice,
            ImgLegend: postData.imgLegend,
            afterImage2Text1: postData.afterImage2Text1,
            afterImage2Text2: postData.afterImage2Text2,
          }}
          postsRecentesTitle="Posts Recentes"
          postsRecentesLink="/projetos"
          postCards={recentPosts.map(post => ({
            id: post.id, 
            image: post.imagePostBanner1,
            title: post.title,
            link: `-projects`
          }))}
        />
      </div>
      <Footer />
    </div>
  );
};

export default NewsPostProjects;

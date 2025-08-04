import Footer from "../components/Footer"
import HeaderInternal from "../components/Header"
import '../components/styles/Pages.css'
import '../components/styles/Pages.css'
import '../components/styles/QuemSomos.css'
import ContactBanner from "../components/ContactBanner";
import BannerTextImage2 from "../components/BannerTextImage2";
import ProjectsCard from "../components/ProjetctsCards";
import { useEffect, useState } from "react";
import { fetchAllPosts, NotionPost } from "../services/notion";

const NossosProjetos = () =>{
    const [projetos, setProjetos] = useState<NotionPost[]>([]);
  
    useEffect(() => {
      const fetchProjetos = async () => {
        const allPosts = await fetchAllPosts();
        const projetosFiltrados = allPosts.filter(
          post => post.category?.trim().toLowerCase() === "banner"
        );
  
        setProjetos(projetosFiltrados);
      };
  
      fetchProjetos();
    }, []);
  return(
        <div>
      <HeaderInternal/>
        <div className="Content-quemsomos">
         {projetos.length > 0 ? (
  <BannerTextImage2
    image={projetos[0].imagePostBanner1}
    title={projetos[0].title}
    titleHighlight={projetos[0].author}
    text1={projetos[0].afterTitle2Text1Notice}
    text2={projetos[0].afterTitle2Text2Notice}
    text3={projetos[0].afterTitle2Text3Notice}
  />
) : (
  <p>Carregando banner...</p>
)}
  
          <ProjectsCard/>
          <ContactBanner id={1} forWho="" adtinionalInfo="" titleColor="#FFFFFF"/>
        </div>
      <Footer/>
    </div>
  )
}

export default NossosProjetos
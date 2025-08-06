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
import ObjectMDecoretionM2 from "../components/ObjectDecoretionM2"
import ObjectPDecoretion from "../components/ObjectPDecoretion"

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
    <>
    
        <div style={{position:"relative", overflow:'hidden'}}>
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
         <ObjectMDecoretionM2 style={{position:'absolute', bottom:"-60px", right:"50%" }}/>
        <ObjectPDecoretion style={{position : 'absolute', bottom:'-60px' , right:'48%', backgroundColor : '#FEC820'}} />
     
    </div>
     <Footer/>
    </>
  )
}

export default NossosProjetos
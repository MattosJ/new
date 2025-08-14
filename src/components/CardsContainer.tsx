import CardService from "../components/CardService";
import "../components/styles/CardsContainer.css";
import { useEffect, useState } from "react";
import { fetchAllPosts, NotionPost } from "../services/notion";
import { Link } from "react-router-dom";

const CardsContainer = () => {

    const [projetos, setProjetos] = useState<NotionPost[]>([]);
  
    useEffect(() => {
  const fetchProjetos = async () => {
    const allPosts = await fetchAllPosts();
    const projetosFiltrados = allPosts.filter(post => 
      post.category?.trim().toLowerCase() === "projeto" &&
      post.highlight?.trim().toLowerCase() === "sim"
    );

    setProjetos(projetosFiltrados);
  };

  fetchProjetos();
}, []);


  return (
    /* Exemplo de uso 
      <CardsContainer/>
    */

    <div className="CardsContainer">
      <div className="cardsContainer-menu-projects">
        <h2 className="CardsContainer-title">
          Nossos Projetos
        </h2>
      <Link to= '/projetos' className="cardsContainer-link">Ver todos projetos</Link>

      </div>
     
    <div className="cardsContainer-Wrapper">
        {projetos.map(projeto => (
  <CardService
    key={projeto.id}
    id={projeto.id} 
    title={projeto.titleCard}
    audience={projeto.forWho}
    subtitle={projeto.subtitleCard}
    buttonText={projeto.btnProjetcts}
    description={projeto.descriptionCard}
    image={projeto.imageCard}
    themeColor={projeto.colorCard}
  />
  ))}
    </div>
      


    </div>
  );
};

export default CardsContainer;

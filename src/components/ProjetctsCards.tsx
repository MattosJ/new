import "../components/styles/peopleCard.css"
import PresentationCard from "./PresentationCard"
import { useEffect, useState } from "react";
import { fetchAllPosts, NotionPost } from "../services/notion";

const ProjetctsCards = () => {
  const [projetos, setProjetos] = useState<NotionPost[]>([]);

  useEffect(() => {
    const fetchProjetos = async () => {
      const allPosts = await fetchAllPosts();
      const projetosFiltrados = allPosts.filter(
        post => post.category?.trim().toLowerCase() === "projeto"
      );

      setProjetos(projetosFiltrados);
    };

    fetchProjetos();
  }, []);

  return (
    <div className="peopleCard-wrapper">
      <h2 className="peopleCard-title">Nossos Projetos</h2>
      <div className="peopleCard-container-cards">
        {projetos.map(projeto => (
          <PresentationCard
            key={projeto.id}
            image={projeto.image1Notice || ""}
            fullName={projeto.title}
            description={projeto.initText || ""}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjetctsCards;

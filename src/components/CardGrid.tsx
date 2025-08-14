import '../components/styles/CardGrid.css';
import servicos from "../assets/servicos.png";
import projetos from "../assets/projetos.png";
import blog from "../assets/blog.png";
import { Link } from 'react-router-dom';

interface Card {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt : string;
  link: string;
}

const CardGrid = () => {
  const cards: Card[] = [
    {
      id: 1,
      title: "Serviços",
      description: "Descrição do card 2. Clique em ver mais para detalhes.",
      image: servicos,
      link: "/servicos",
      imageAlt:"Descrição da imagem"
    },
    {
      id: 2,
      title: "Projetos",
      description: "Descrição do card 3. Clique em ver mais para detalhes.",
      image: projetos,
      link: "/nossos-projetos",
      imageAlt:"Descrição da imagem"
    },
    {
      id: 3,
      title: "Blog",
      description: "Descrição do card 5. Clique em ver mais para detalhes.",
      image: blog,
      link: "/blog",
      imageAlt:"Descrição da imagem"
    },
  ];

  return (
    /* Exemplo de uso
      <CardGrid/>
    */
    <>
    <div className='card-grid-wrapper'>
        <h2 className='card-grid-major-title'>Conheça Nosso Trabalho</h2>
    <div className="card-grid">
      {cards.map((card) => (
        <div className="card" key={card.id}>
          <div className="card-inner">
            <div className="card-front">
              <div className="card-img">
                <img src={card.image} alt={card.title} />
              </div>
              <div className="card-title">
                <h3>{card.title}</h3>
              </div>
            </div>

            <div className="card-back">
              <div className="card-description">
                <p>{card.description}</p>
                <Link to={card.link} className="card-link">
                  Ver mais
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
    
    </>
  );
};

export default CardGrid;

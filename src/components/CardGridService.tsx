import '../components/styles/CardGridService.css';
import card1 from "../assets/6.png";
import card2 from "../assets/5.png";
import card3 from "../assets/7.png";


interface Card {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  link: string;
}

const CardGridService = () => {
  const cards: Card[] = [
    {
      id: 1,
      title: "Tour Brasil Pro Music Busines",
      description: 'Em 2022, Intera foi responsável pela gestão administrativa da tour Pro Music Business 360, que circulou vários estados do Brasil com o palestrante Bono da Costa .',
      image: card1,
      link: "/quem-somos",
      imageAlt : "Descrição da imagem"
    },
    {
      id: 2,
      title: "Descomplicando Projetos Culturais",
      description: "Descrição do card 2. Clique em ver mais para detalhes.",
      image: card2,
      link: "/servicos",
      imageAlt : "Descrição da imagem"
    },
    {
      id: 3,
      title: "Casulo Criativo",
      description: "Descrição do card 3. Clique em ver mais para detalhes.",
      image: card3,
      link: "/por-onde-passamos",
      imageAlt : "Descrição da imagem"
    },
    {
      id: 4,
      title: "Feirinha Gambiarra",
      description: "Descrição do card 3. Clique em ver mais para detalhes.",
      image: card3,
      link: "/por-onde-passamos",
      imageAlt : "Descrição da imagem"
    },
    {
      id: 5,
      title: "Casa Intera",
      description: "Descrição do card 3. Clique em ver mais para detalhes.",
      image: card3,
      link: "/por-onde-passamos",
      imageAlt : "Descrição da imagem"
    },
    {
      id: 6,
      title: "Periferia",
      description: "Descrição do card 3. Clique em ver mais para detalhes.",
      image: card3,
      link: "/por-onde-passamos",
      imageAlt : "Descrição da imagem"
    },
  ];

  return (
    <div className="card-grid-service">
      {cards.map((card) => (
        <div className="card-service" key={card.id}>
          <div className="card-inner">
            <div className="card-front">
              <div className="card-img">
                <img src={card.image} alt={card.title} />
                <div className="card-title-service">
                  <h3>{card.title}</h3>
                </div>
              </div>
            </div>

            <div className="card-back">
              <div className="card-description">
                <p>{card.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardGridService;

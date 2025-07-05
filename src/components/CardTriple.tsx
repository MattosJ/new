import card1 from "../assets/6.png";
import card2 from "../assets/5.png";
import card3 from "../assets/7.png";
import '../components/styles/CardTriple.css';

interface Card {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const CardTriple = () => {
  const cards: Card[] = [
    {
      id: 1,
      title: "Oficinas",
      description: 'Nós na Intera, somos uma engrenagem de pessoas apaixonadas pelo que fazem, e valorizamos o "fazer fora da caixa".Nós na Intera, somos uma engrenagem de pessoas apaixonadas pelo que fazem, e valorizamos o "fazer fora da caixa".Nós na Intera, somos uma engrenagem de pessoas apaixonadas pelo que fazem, e valorizamos o "fazer fora da caixa".Nós na Intera, somos uma engrenagem de pessoas apaixonadas pelo que fazem, e valorizamos o "fazer fora da caixa".Nós na Intera, somos uma engrenagem de pessoas apaixonadas pelo que fazem, e valorizamos o "fazer fora da caixa".Nós na Intera, somos uma engrenagem de pessoas apaixonadas pelo que fazem, e valorizamos o "fazer fora da caixa".Nós na Intera, somos uma engrenagem de pessoas apaixonadas pelo que fazem, e valorizamos o "fazer fora da caixa".Nós na Intera, somos uma engrenagem de pessoas apaixonadas pelo que fazem, e valorizamos o "fazer fora da caixa".',
      image: card1,
      link: "/quem-somos"
    },
    {
      id: 2,
      title: "Mentoria em Gestão Cultural",
      description: "Descrição do card 2. Clique em ver mais para detalhes.",
      image: card2,
      link: "/servicos"
    },
    {
      id: 3,
      title: "Mentorias em Projetos Culturais",
      description: "Descrição do card 3. Clique em ver mais para detalhes.",
      image: card3,
      link: "/por-onde-passamos"
    },
  ];

  return (
    <div className="CardsT">
      {cards.map((card) => (
        <div key={card.id} className="cardTBody" style={{ backgroundImage: `url(${card.image})` }}>
          <div className="cardT-content">
            <h2 className="cardT-title">{card.title}</h2>
            <p className="cardT-description">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardTriple;

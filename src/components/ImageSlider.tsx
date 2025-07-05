import { useState, useEffect, useRef } from "react";
import PrefItabaianinha from "../assets/PrefItabaianinha.png";
import PrefRiachuelo from "../assets/PrefRiachuelo.png";
import EscolaLegislativo from "../assets/EscolaLegislativo.png"
import Alese from "../assets/image.png";
import Funcap from "../assets/FUNCAP.png"
import PrefTomardoGeru from "../assets/PrefTomardoGeru.png"
import PrefCapela from "../assets/PrefCapela.png"
import AHS from "../assets/AHS.png"
import PrefLaranjeiras from "../assets/PrefLaranjeiras.png"
import PrefBarra from "../assets/PrefBarra.png"
import RockSertao from "../assets/RockSertao.png"
import "../components/styles/ImageSlider.css";

interface Card {
  id: number;
  title: string;
  description: string;
  image: string;
}

const originalCards: Card[] = [
  {
    id: 1,
    title: "Serviço X",
    description:
      'Nós na Intera, somos uma engrenagem de pessoas apaixonadas pelo que fazem, e valorizamos o "fazer fora da caixa".',
    image: EscolaLegislativo,
  },
  {
    id: 2,
    title: "Serviço Y",
    description: "Descrição do card 2. Clique em ver mais para detalhes.",
    image: PrefItabaianinha,
  },
  {
    id: 3,
    title: "Serviço Z",
    description: "Descrição do card 3. Clique em ver mais para detalhes.",
    image: PrefRiachuelo,
  },
  {
    id: 4,
    title: "Serviço W",
    description: "Descrição do card 4. Clique em ver mais para detalhes.",
    image: Alese,
  },
  {
    id: 5,
    title: "Serviço X",
    description:
      'Nós na Intera, somos uma engrenagem de pessoas apaixonadas pelo que fazem, e valorizamos o "fazer fora da caixa".',
    image: Funcap,
  },
  {
    id: 6,
    title: "Serviço X",
    description:
      'Nós na Intera, somos uma engrenagem de pessoas apaixonadas pelo que fazem, e valorizamos o "fazer fora da caixa".',
    image: PrefTomardoGeru,
  },
  {
    id: 7,
    title: "Serviço X",
    description:
      'Nós na Intera, somos uma engrenagem de pessoas apaixonadas pelo que fazem, e valorizamos o "fazer fora da caixa".',
    image: PrefCapela,
  },
  {
    id: 8,
    title: "Serviço X",
    description:
      'Nós na Intera, somos uma engrenagem de pessoas apaixonadas pelo que fazem, e valorizamos o "fazer fora da caixa".',
    image: AHS,
  },
  {
    id: 9,
    title: "Serviço X",
    description:
      'Nós na Intera, somos uma engrenagem de pessoas apaixonadas pelo que fazem, e valorizamos o "fazer fora da caixa".',
    image: PrefLaranjeiras,
  },
  {
    id: 10,
    title: "Serviço X",
    description:
      'Nós na Intera, somos uma engrenagem de pessoas apaixonadas pelo que fazem, e valorizamos o "fazer fora da caixa".',
    image: PrefBarra,
  },
  {
    id: 11,
    title: "Serviço X",
    description:
      'Nós na Intera, somos uma engrenagem de pessoas apaixonadas pelo que fazem, e valorizamos o "fazer fora da caixa".',
    image: RockSertao,
  },
  
];

const cards = [...originalCards, ...originalCards, ...originalCards];

const ImageSlider = () => {
  const [position, setPosition] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [itemWidth, setItemWidth] = useState(0);
  const itemRef = useRef<HTMLDivElement>(null);

  const originalLength = originalCards.length;
  const totalItems = cards.length;

  useEffect(() => {
    if (itemRef.current) {
      const style = window.getComputedStyle(itemRef.current);
      const gap = parseFloat(style.marginRight) || 15;
      setItemWidth(itemRef.current.offsetWidth + gap);
    }
  }, []);

  const nextSlide = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setPosition((prev) => {
      if (prev >= totalItems - originalLength - 1) {
        setTimeout(() => {
          setIsTransitioning(false);
          setPosition(0);
        }, 0);
        return prev + 1;
      }
      return prev + 1;
    });

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 1800);

    return () => clearInterval(interval);
  }, );

  const getTransformValue = () => {
    return `translateX(-${position * itemWidth}px)`;
  };

  const getTransitionStyle = () => {
    return isTransitioning ? "transform 0.5s ease-in-out" : "none";
  };

  return (
    <div className="container-img-slider">
      <div className="gallery-wrapper">
        <div
          className="gallery"
          style={{
            transform: getTransformValue(),
            transition: getTransitionStyle(),
          }}
        >
          {cards.map((card, index) => (
            <div
              key={`${card.id}-${index}`}
              className={`item ${index === position + 1 ? "current-item" : ""}`}
              ref={index === 0 ? itemRef : null}
            >
              <img
                src={card.image}
                alt={card.description}
                className="item-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;

import { useState, useEffect } from 'react';
import '../components/styles/SlideShow.css';
import James from "../assets/James.png"
import Alisson from "../assets/Alisson.png"
import card4 from "../assets/8.png"
import card5 from "../assets/9.png"
import card6 from "../assets/10.png"
{/*import { Link } from 'react-router-dom';*/}

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const slides: Slide[] = [
    {
      id: 1,
      title: "Nossa Equipe",
      description: "Nós na Intera, somos uma engrenagem de pessoas apaixonadas pelo que fazem, e valorizamos o 'fazer fora da caixa',a diversidade de olhares e a construção colaborativa para gerar novos caminhos e apostar em possibilidades inventivas.Temos como nossa missão promover a felicidade a partir das experiências dos produtos e serviços ofertados, de forma direta, eficaz e sobretudo rápida, para uma melhor experiência de ambos os lados.Amamos criatividade e inovação, e com elas acreditamos que um mundo melhor é possível!A INTERA é uma empresa de Gestão Criativa que propõe compartilhar as experiências de mais de 10 anos de atuação  na execução e planejamento de projetos e políticas nas áreas de Cultura, Turismo e Juventude. Oferecemos oficinas empreendedoras e aceleração de negócios e projetos, atuamos no desenvolvimento de metodologias de ensino, trilhas de inovação e impacto social elaboradas para preparar as pessoas para o futuro do trabalho.",
      image: card5,
      link: "/quem-somos"
    },
    {
      id: 2,
      title: "Alisson",
      description: "CEO",
      image: Alisson,
      link: "/servicos"
    },
    {
      id: 3,
      title: "Thiara Camera",
      description: "Diretora",
      image: card4,
      link: "/por-onde-passamos"
    },
    {
      id: 4,
      title: "Mariana Xavier",
      description: "Administrativo",
      image: card4,
      link: "/nossos-projetos"
    },
    {
      id: 5,
      title: "Ravel Araujo",
      description: "CTO",
      image: card5,
      link: "/oficinas-e-cursos"
    },
    {
      id: 6,
      title: "Kcau",
      description: "Administrativo",
      image: card6,
      link: "/fale-conosco"
    },
    {
      id:7,
      title:"James Pereira",
      description: "Desenvolvedor",
      image:James,
      link:"/fale-conosco"
    },
  ];

  const changeSlide = (newIndex: number) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setFade(true);
    
    setTimeout(() => {
      setCurrentSlide(newIndex);
      setFade(false);
      
      setTimeout(() => {
        setIsAnimating(false);
      }, 450); 
    }, 450); 
  };

  const nextSlide = (): void => {
    const newIndex = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
    changeSlide(newIndex);
  };

  const prevSlide = (): void => {
    const newIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    changeSlide(newIndex);
  };

  const goToSlide = (index: number): void => {
    if (index === currentSlide) return;
    changeSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 7000);

    return () => clearInterval(interval);
  }, );

  return (
    <div className="slideshow-container">
      <button className="prev" onClick={prevSlide} disabled={isAnimating}>&#10094;</button>
      <div className={`slide ${fade ? 'fade-out' : 'fade-in'}`}>
        <img src={slides[currentSlide].image} alt={slides[currentSlide].title}/>
        <div className="slide-content">
          <h3>{slides[currentSlide].title}</h3>
          <p>{slides[currentSlide].description}</p>
          
        </div>
      </div>
      <button className="next" onClick={nextSlide} disabled={isAnimating}>&#10095;</button>
      
      <div className="dots-container">
        {slides.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;

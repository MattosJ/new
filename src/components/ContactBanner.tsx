import React from 'react';
import '../components/styles/ContactBanner.css';
import BannerImage from '../assets/bannerImage2.png';
import { Link } from 'react-router-dom';

interface ContactBannerProps {
  id: number;
  backgroundColor?: string;
  title?: string;
  highlightText?: string;
  subtitle?: string;
  buttonText?: string;
  titleColor?: string;
  subtitleColor?: string;
  highlightColor?: string;
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
  adtinionalInfo?: string;
  forWho?: string;
  forWhoColor?: string;
  adtinionalInfoColor?:string
}

const ContactBanner: React.FC<ContactBannerProps> = ({
  id,
  backgroundColor,
  title = 'Quer algo sob medida?',
  highlightText = 'Fale com a gente!',
  subtitle = 'Nosso time está pronto para cocriar soluções personalizadas para sua organização, comunidade ou desafio social.',
  buttonText = 'Quero conversar com a Intera',
  adtinionalInfo = 'Para quem?',
  forWho = 'Escolas, ONGs e redes públicas',
  titleColor,
  subtitleColor,
  highlightColor,
  buttonBackgroundColor,
  buttonTextColor,
  forWhoColor,
  adtinionalInfoColor,
}) => {
  const isEven = id % 2 === 0;
  const flexDirection = isEven ? 'row-reverse' : 'row';

  return (
    <section
      className="contact-banner"
      style={{
        backgroundColor,
        display: 'flex',
        flexDirection,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '4rem',
      }}
    >
      <div className="contact-banner-content">
        <h2 className="contact-title" style={{ color: titleColor }}>
          {title} <br />
          <span className="highlight" style={{ color: highlightColor }}>
            {highlightText}
          </span>
        </h2>
        <p className="contact-subtitle" style={{ color: subtitleColor }}>
          {subtitle}
        </p>
        <span className='contact-aditional-info' style={{color:adtinionalInfoColor}}>
          {adtinionalInfo}
        </span>
        <p className='contact-for-who' style={{color: forWhoColor}}>
          {forWho}
        </p>


        <Link to="/fale-conosco"
          className="contact-button"
          style={{
            backgroundColor: buttonBackgroundColor,
            color: buttonTextColor,
          }}
        >
         {buttonText}
        </Link>
      </div>
      <div className="contact-banner-image">
        <img src={BannerImage} alt="Ilustração Contato" />
      </div>
    </section>
  );
};

export default ContactBanner;

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
  adtinionalInfoColor?:string;
  imageAlt ?: string;
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
  imageAlt = 'Imagem de contato',
}) => {
  const isEven = id % 2 === 0;
  const flexDirection = isEven ? 'row-reverse' : 'row';

  return (
    /*Exemplos de uso
      <ContactBanner id={0} backgroundColor="#ffffff" titleColor="#000000" subtitleColor="#000000" buttonBackgroundColor="#0097A3" buttonTextColor="#FFFFFF" title=" Gestão Pública da Cultura" subtitle="Oferecemos consultoria técnica especializada para governos e instituições públicas que desejam fortalecer suas políticas culturais. Atuamos na construção, execução e avaliação de programas como a Política Nacional Aldir Blanc (PNAB), a Lei Paulo Gustavo, e outros marcos importantes para a cultura.
        Desenvolvemos metodologias participativas, elaboração de editais, planos de ação, diagnósticos, instrumentos normativos e relatórios de impacto. Trabalhamos lado a lado com gestões comprometidas em ampliar o acesso, promover diversidade e estruturar o campo cultural com planejamento e visão de futuro." 
        highlightText="" buttonText="Da ideia à ação: saiba mais..." forWhoColor="#00000"
      />

      <ContactBanner id={1} backgroundColor="#ffffff" titleColor="#000000" subtitleColor="#000000" buttonBackgroundColor="#0097A3" buttonTextColor="#FFFFFF" title="Projetos Criativos e Mentoria Artística" subtitle="Apoiamos profissionais da cultura e da economia criativa no desenvolvimento de projetos que unem identidade, inovação e viabilidade. Nossa mentoria é voltada para artistas, instituições públicas, privadas, coletivos, marcas e empreendedores criativos que desejam estruturar suas ideias, fortalecer sua narrativa e apresentá-las de forma sólida.
        Combinamos escuta qualificada e planejamento estratégico para transformar iniciativas criativas em propostas consistentes, prontas para editais, captação, pitchings ou execução direta. Atuamos em múltiplas linguagens e formatos, respeitando a singularidade de cada proposta e ajudando a expandir seu alcance e impacto." highlightText="" buttonText="Da ideia à ação: saiba mais..."
        />

    */

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
        <img src={BannerImage} alt={imageAlt} />
      </div>
    </section>
  );
};

export default ContactBanner;

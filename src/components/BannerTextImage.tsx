import React from 'react';
import '../components/styles/bannerTI.css';
import BannerBg from '../assets/banner-ti.png';

interface BannerTextImageProps {
  title: string;
  subtitle: string;
  style?: React.CSSProperties;
}

const BannerTextImage: React.FC<BannerTextImageProps> = ({ title, subtitle }) => {
  return (
    /*Exemplo de uso 
        <BannerTextImage  title="Conecta, Cria e Transforma!"
          subtitle="Aqui, construímos pontes para um mundo mais colaborativo, justo e criativo."
          style={{ backgroundImage: `url(${bannerImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
    */

    <div
      className="banner-wrapper"
      style={{ backgroundImage: `url(${BannerBg})` }}
    >
      <div className="banner-info-field">
        <h2 className="banner-info-title">{title}</h2>
        <h3 className="banner-info-subtitle">{subtitle}</h3>
      </div>
    </div>
  );
};

export default BannerTextImage;

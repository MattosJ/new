import React from 'react';
import '../components/styles/bannerTI.css';
import BannerBg from '../assets/banner-ti.png'; // ajuste o caminho conforme necessário

interface BannerTextImageProps {
  title: string;
  subtitle: string;
  style?: React.CSSProperties;
}

const BannerTextImage: React.FC<BannerTextImageProps> = ({ title, subtitle }) => {
  return (
    <div
      className="banner-wrapper"
      style={{ backgroundImage: `url(${BannerBg})` }}
    >
      <div className="banner-info-field">
        <h2 className="banner-info-title">{title}</h2>
        <h4 className="banner-info-subtitle">{subtitle}</h4>
      </div>
    </div>
  );
};

export default BannerTextImage;

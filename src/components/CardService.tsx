import React from "react";
import { Link } from "react-router-dom";

type CardServiceProps = {
  id: string; 
  image?: string;
  title: string;
  subtitle?: string;
  description?: string;
  audience?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
  themeColor?: string;
};

const CardService: React.FC<CardServiceProps> = ({
  id,
  image,
  title,
  subtitle,
  description,
  audience,
  buttonText,
  onButtonClick,
  style = {},
  className = "",
  themeColor = "#00a7e1",
}) => {
  return (
    /* Exemplo de uso
        <CardService
          key={projeto.id}
          id={projeto.id} 
          title={projeto.titleCard}
          audience={projeto.forWho}
          subtitle={projeto.subtitleCard}
          buttonText={projeto.btnProjetcts}
          description={projeto.descriptionCard}
          image={projeto.imageCard}
          themeColor={projeto.colorCard}
        />
    */
    <Link
      to={`/post-projects/${id}`} //  link para o post
      className={`CardService-Card ${className}`}
      style={{ borderColor: themeColor, ...style }}
    >
      <div className="CardService-imagem">
        {image && <img src={image} alt={title} />}
      </div>

      <div className="CardService-Content">
        <h3
          className="CardService-title-card"
          style={{ color: themeColor }}
        >
          {title}
        </h3>
        {subtitle && (
          <h4 className="CardService-subtitle-card">{subtitle}</h4>
        )}
        {description && <p className="CardService-text">{description}</p>}

        <h4 className="CardService-subtitle-card-FH">Para Quem:</h4>
        {audience && <p>{audience}</p>}
      </div>

      {buttonText && (
        <div className="CardService-btn">
          <button
            onClick={() => {
              onButtonClick?.();
            }}
            className="CardService-button"
            style={{ backgroundColor: themeColor }}
          >
            {buttonText}
          </button>
        </div>
      )}
    </Link>
  );
};

export default CardService;

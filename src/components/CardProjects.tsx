import React from "react";

type CardProjectsProps = {
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

const CardProjects: React.FC<CardProjectsProps> = ({
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
    <CardProjects
      key={projeto.id} 
      title={projeto.titleCard}
      audience={projeto.forWho}
      subtitle={projeto.subtitleCard}
      description={projeto.descriptionCard}
      image={projeto.imageCard}
      themeColor={projeto.colorCard}
    />
    */

    <div
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
    </div>
  );
};

export default CardProjects;

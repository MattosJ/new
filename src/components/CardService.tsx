import React from "react";

type CardServiceProps = {
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
        {audience && (
          <h4 className="CardService-subtitle-card-FH">{audience}</h4>
        )}
      </div>

      {buttonText && (
        <div className="CardService-btn">
          <button
            onClick={onButtonClick}
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

export default CardService;

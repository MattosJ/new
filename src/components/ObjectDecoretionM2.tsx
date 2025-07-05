import React from 'react';
import '../components/styles/decoretionM.css';
import svgDecoretions2 from "../assets/Vector-2.svg";

interface ObjectMDecoretionProps {
  style?: React.CSSProperties;
}

const ObjectMDecoretionM2: React.FC<ObjectMDecoretionProps> = ({ style }) => {
  return (
    <img
      src={svgDecoretions2}
      className="decoretionM"
      style={style}
      alt="Decoração M-2"
    />
  );
};

export default ObjectMDecoretionM2;

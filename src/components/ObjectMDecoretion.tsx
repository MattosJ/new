import React from 'react';
import '../components/styles/decoretionM.css';
import svgDecoretions from "../assets/Vector.svg";

interface ObjectMDecoretionProps {
  style?: React.CSSProperties;
}

const ObjectMDecoretion: React.FC<ObjectMDecoretionProps> = ({ style }) => {
  return (
    /* Exemplo de uso
     <ObjectMDecoretion style={{position:'absolute', bottom:"-60px", right:"50%" }}/> 
    */
    <img
      src={svgDecoretions}
      className="decoretionM"
      style={style}
      alt="Decoração M"
    />
  );
};

export default ObjectMDecoretion;

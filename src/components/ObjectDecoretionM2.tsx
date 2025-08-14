import React from 'react';
import '../components/styles/decoretionM.css';
import svgDecoretions2 from "../assets/Vector-2.svg";

interface ObjectMDecoretionProps {
  style?: React.CSSProperties;
}

const ObjectMDecoretionM2: React.FC<ObjectMDecoretionProps> = ({ style }) => {
  return (
    /* Exemplos de uso 
       <ObjectMDecoretionM2 style={{position:'absolute', bottom:"-60px", right:"50%" }}/>
    */

    <img
      src={svgDecoretions2}
      className="decoretionM"
      style={style}
      alt="Decoração M-2"
    />
  );
};

export default ObjectMDecoretionM2;

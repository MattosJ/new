import React from "react";
import "../components/styles/bannerTextImage2.css"
interface BannerTextImage2Props{
  image : string;
  title : string;
  titleHighlight : string;
  text1 : string;
  text2 : string;
  text3 : string;

}
const bannerTextImage2 : React.FC<BannerTextImage2Props> = ({image, title, titleHighlight,text1,text2,text3 }) => {
   
  return(
    <div className="BTI2-wrapper">
      <div className="BTI2-content">
        <h2 className="BTI2-title">{title} <span className="BTI2-title-highlight">{titleHighlight}</span></h2>
        <p className="BTI2-text-1">{text1}</p>
        <p className="BTI2-text-2">{text2}</p>
        <p className="BTI2-text-3">{text3}</p>
      </div>
      <div className="BTI2-img">
        <img src={image} alt="Descrição da imagem"/>
      </div>
    </div>
  )
}
export default bannerTextImage2
import "../components/styles/postBodyNotice.css"
import ShareMenu from "./ShareMenu";
interface PostBodyNoticeProps{
  initText : string;
  title1 : string;
  descriptionTitle1 : string;
  image : string;
  textAfterImage : string;
  listItem1 : string;
  listItem2 : string;
  listItem3 : string;
  listItem4 : string;
  subtitle : string;
  afterSubtitleText : string;
  afterSubtitleText2 : string;
  title2 : string;
  afterTitle2Text1 : string;
  afterTitle2Text2 : string;
  afterTitle2Text3 : string;
  image2 : string;
  ImgLegend : string;
  afterImage2Text1 : string;
  afterImage2Text2 : string;
}
const PostBodyNotice:React.FC<PostBodyNoticeProps> = ({initText,title1,descriptionTitle1,image,textAfterImage,listItem1,listItem2,listItem3,listItem4,subtitle,afterSubtitleText,afterSubtitleText2,title2,afterTitle2Text1,afterTitle2Text2,afterTitle2Text3,image2,ImgLegend,afterImage2Text1,afterImage2Text2}) => {
  const url = window.location.href
  const titulo = "Título da notícia"
  return(
    /* Exemplo de uso 
      <PostBodyNotice {...bodyNoticeProps} />
    */

    <div className  = "post-body-notice" >
      <p>{initText}</p>
      <h3 className="post-body-notice-title">{title1}</h3>
      <p>{descriptionTitle1}</p>
      <img src={image}/>
      <p>{textAfterImage}</p>
      <ul>
        <li>{listItem1}</li>
        <li>{listItem2}</li>
        <li>{listItem3}</li>
        <li>{listItem4}</li>
      </ul>
      <h4 className="post-body-notice-subtitle">{subtitle}</h4>
      <p>{afterSubtitleText}</p>
      <p>{afterSubtitleText2}</p>
      <h3 className="post-body-notice-title">{title2}</h3>
      <p>{afterTitle2Text1}</p>
      <p>{afterTitle2Text2}</p>
      <p>{afterTitle2Text3}</p>
      <img src={image2}/>
      <p>{ImgLegend}</p>
      <p>{afterImage2Text1}</p>
      <p>{afterImage2Text2}</p>
      <div className='shareMenu-container'>
        <h2 className='shareMenu-title'>Compartilhe</h2>
        <ShareMenu url={url} title={titulo} />
    </div>
    </div>
  )
}
export default PostBodyNotice
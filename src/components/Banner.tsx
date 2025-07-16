import "../components/styles/banner.css"
interface bannerProps{
  image:string;
  Frase:string;
  imageAlt : string;
}
const Banner = ({image,Frase,imageAlt}:bannerProps) =>{
  return(
    <div className="banner-container">
      <div className="banner-img">
        <h1 className="banner-title">{Frase}</h1>
        <img src={image} alt={imageAlt}/>
      </div>
    </div>
  )
}

export default Banner
import "../components/styles/banner.css"
interface bannerProps{
  image:string;
  Frase:string;
}
const Banner = ({image,Frase}:bannerProps) =>{
  return(
    <div className="banner-container">
      <div className="banner-img">
        <h1 className="banner-title">{Frase}</h1>
        <img src={image}/>
      </div>
    </div>
  )
}

export default Banner
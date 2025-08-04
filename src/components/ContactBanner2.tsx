import { Link } from "react-router-dom";
import "../components/styles/Contactbanner2.css"
interface ContactBanner2Props{
  image: string;
  imageAlt : string;
  LinkTo : string;
  TitleBanner : string;
  buttonText : string;
}
const ContactBanner2:React.FC<ContactBanner2Props> = ({image,imageAlt,LinkTo,TitleBanner,buttonText}) =>{
  return(
     <div className="blog-contact-banner">
                <div className="blog-contct-banner-img">
                  <img src={image}  alt={imageAlt}/>
                </div>
                <h3 className="blog-contact-banner-title">{TitleBanner}</h3>
                <Link to={LinkTo} className="blog-contact-banner-btn">{buttonText}</Link>
          </div>
  )
}
export default ContactBanner2;
import { Link } from "react-router-dom"
import "../components/styles/PostBanner.css"
interface PostBannerProps {
  linkText : string;
  title : string;
  author : string;
  date : string;
  Image : string;
}
const PostBanner:React.FC<PostBannerProps> = ({linkText,title,author,date,Image}) =>{
  return(
    <div className="postBanner-container">
      <div className="postBanner-content">
        <Link to="/blog" className="postBanner-linkText">{linkText}</Link>
        <h2 className="postBanner-title">{title}</h2>
        <h3 className="postBanner-author">{author}</h3>
        <p className="postBanner-date">{date}</p>
      </div>
      <div className="postBanner-img">
        <img src={Image}/>
      </div>
    </div>
  )
}

export default PostBanner;
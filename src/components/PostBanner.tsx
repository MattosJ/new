import { Link } from "react-router-dom"
import "../components/styles/PostBanner.css"
interface PostBannerProps {
  linkText : string;
  title : string;
  author : string;
  date : string;
  Image : string;
  linkTo : string;
}
const PostBanner:React.FC<PostBannerProps> = ({linkText,title,author,date,Image,linkTo = "/blog"}) =>{
  return(
    /* Exemplo de uso
       <PostBanner
            Image={mostRecentPost.imagePostBanner1}
            linkText="Ver notícia completa"
            author={mostRecentPost.author}
            date={mostRecentPost.date}
            title={mostRecentPost.title}
            linkTo={`/post/${mostRecentPost.id}`}
          />
    */

    <div className="postBanner-container">
      <div className="postBanner-content">
        <Link to={linkTo} className="postBanner-linkText">{linkText}</Link>
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
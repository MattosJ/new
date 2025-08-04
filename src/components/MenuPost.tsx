import {Link} from 'react-router-dom'
import "../components/styles/Posts.css"
interface MenuPostProps{
  title : string;
  textLinkPost : string;
  linkTo : string;
}
const MenuPost:React.FC<MenuPostProps> = ({title,textLinkPost,linkTo}) =>{
  return(
   <div className="menuPost">
      <h2 className='post-Title'>{title}</h2>
      <Link to={linkTo} className='post-link'>{textLinkPost}</Link>
    </div>
   )
}

export default MenuPost;


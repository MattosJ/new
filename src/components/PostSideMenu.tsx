import { Link } from "react-router-dom"
import "../components/styles/postSideMenu.css"
interface PostSideMenuProps{
  item1: string;
  item2: string;
  item3: string;
  item4: string;
  item5: string;
  item6: string;
  item7: string;
  item8: string;
  item9: string;
  item10: string;
  item11: string;
  item12: string;
  item13: string;
  item14: string;
  item15: string;
  item16: string;
  title: string;
}
const PostSideMenu:React.FC<PostSideMenuProps> = ({item1,item2,item3,item4,item5,item6,item7,item8,item9,item10,item11,item12,item13,item14,item15,item16,title}) =>{
  return(
    <div className="post-sideMenu-wrapper">
      <h2 className="post-sideMenu-title">{title}</h2>
      <ul className="post-menu-itens">
        <Link to="/blog" className="post-menu-item">{item1}</Link>
        <Link to="/blog" className="post-menu-item">{item2}</Link>
        <Link to="/blog" className="post-menu-item">{item3}</Link>
        <Link to="/blog" className="post-menu-item">{item4}</Link>
        <Link to="/blog" className="post-menu-item">{item5}</Link>
        <Link to="/blog" className="post-menu-item">{item6}</Link>
        <Link to="/blog" className="post-menu-item">{item7}</Link>
        <Link to="/blog" className="post-menu-item">{item8}</Link>
        <Link to="/blog" className="post-menu-item">{item9}</Link>
        <Link to="/blog" className="post-menu-item">{item10}</Link>
        <Link to="/blog" className="post-menu-item">{item11}</Link>
        <Link to="/blog" className="post-menu-item">{item12}</Link>
        <Link to="/blog" className="post-menu-item">{item13}</Link>
        <Link to="/blog" className="post-menu-item">{item14}</Link>
        <Link to="/blog" className="post-menu-item">{item15}</Link>
        <Link to="/blog" className="post-menu-item">{item16}</Link>
      </ul>
    </div>
  )
}

export default PostSideMenu
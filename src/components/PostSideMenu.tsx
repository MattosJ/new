import { Link } from "react-router-dom";
import "../components/styles/postSideMenu.css"
interface PostSideMenuProps {
  title: string;
  items: string[];
  linksItens : string[];
}

const PostSideMenu: React.FC<PostSideMenuProps> = ({ title, items,linksItens }) => {
  return (
    <div className="post-sideMenu-wrapper">
      <h2 className="post-sideMenu-title">{title}</h2>
      <ul className="post-menu-itens">
        {items.map((item, index) => (
          <Link key={index} to={linksItens[index]} className="post-menu-item">
            {item}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default PostSideMenu;

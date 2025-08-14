import { Link } from 'react-router-dom';
interface PostCardProps{
  id: string;
  image : string;
  title: string;
  link : string;
}

const PostCard: React.FC<PostCardProps> = ({ id, image, title , link }) => {
  return (
    /* Exemplos de uso 
       <PostCard key={card.id} id={card.id} image={card.image} title={card.title}  link={card.link}/>
        {postCards.map((card ) => (
          <PostCard key={card.id} id={card.id} image={card.image} title={card.title}  link={card.link}/>
        ))}
    */

    <Link to={`/post${link}/${id}`} className="post-card-link">
      <div className="post-card">
        <div className="post-card-img">
          <img src={image} alt={title} />
        </div>
        <div className="post-card-title">
          <h3>{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
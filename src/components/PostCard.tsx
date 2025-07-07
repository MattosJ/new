interface PostCardProps{
  Image : string;
  title: string;
}

const PostCard:React.FC<PostCardProps> = ({Image,title}) =>{
  return(
    <div className="post-card">
      <div className="post-card-img">
        <img src={Image}/>
      </div>
      <div className="post-card-title">
        <h3>{title}</h3>
      </div>

    </div>
  )
}

export default PostCard
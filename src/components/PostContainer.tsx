import {Link} from 'react-router-dom'
import "../components/styles/Posts.css"
import PostCard from './PostCard';
import image from "../assets/10.png"
interface PostContainerProps{
  title : string;
  textLinkPost : string;
}
const PostContainer:React.FC<PostContainerProps> = ({title,textLinkPost}) => {
  return(
    <>
    <div className="PostContainer">
    <div className="menuPost">
      <h2 className='post-Title'>{title}</h2>
      <Link to="/blog" className='post-link'>{textLinkPost}</Link>
    </div>
    <div className='postsCards-container'>
      <PostCard Image={image} title='Nam egestas dui vel interdum dictum. Nulla ac urna Nam egestas dui vel interdum dictum. Nulla ac urna ' />
      <PostCard Image={image} title='Nam egestas dui vel interdum dictum. Nulla ac urna Nam egestas dui vel interdum dictum. Nulla ac urna ' />
      <PostCard Image={image} title='Nam egestas dui vel interdum dictum. Nulla ac urna Nam egestas dui vel interdum dictum. Nulla ac urna ' />
      <PostCard Image={image} title='Nam egestas dui vel interdum dictum. Nulla ac urna Nam egestas dui vel interdum dictum. Nulla ac urna ' />

    </div>
    </div>
    </>
    
  )
}

export default PostContainer
import "../components/styles/Posts.css";
import PostCard from './PostCard';
import PostBodyNotice from './PostBodyNotice';
import MenuPost from './MenuPost';

interface PostCardData {
  id: string;
  image: string;
  title: string;
}

interface PostContainerProps {
  bodyNoticeProps: React.ComponentProps<typeof PostBodyNotice>;
  postsRecentesTitle: string;
  postsRecentesLink: string;
  postCards: PostCardData[];
}

const PostContainer: React.FC<PostContainerProps> = ({
  bodyNoticeProps,
  postsRecentesTitle,
  postsRecentesLink,
  postCards
}) => {
  return (
    <div className="PostContainer">
      <div className='post-notice-container'>
        <PostBodyNotice {...bodyNoticeProps} />
      </div>

      <MenuPost title={postsRecentesTitle} textLinkPost="Ver Todos os Posts" linkTo={postsRecentesLink} />

      <div className='postsCards-container'>
        {postCards.map((card ) => (
          <PostCard key={card.id} id={card.id} image={card.image} title={card.title} />
        ))}
      </div>
    </div>
  );
};

export default PostContainer;

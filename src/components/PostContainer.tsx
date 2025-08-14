import "../components/styles/Posts.css";
import PostCard from './PostCard';
import PostBodyNotice from './PostBodyNotice';
import MenuPost from './MenuPost';

interface PostCardData {
  id: string;
  image: string;
  title: string;
  link : string;
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
    /*Exemplo de uso
       <PostContainer
          bodyNoticeProps={{
            initText: postData.initText,
            title1: postData.title1Notice,
            descriptionTitle1: postData.descriptionTitle1Notice,
            image: postData.image1Notice,
            textAfterImage: postData.textAfterImage1Notice,
            listItem1: postData.listItem1Notice,
            listItem2: postData.listItem2Notice,
            listItem3: postData.listItem3Notice,
            listItem4: postData.listItem4Notice,
            subtitle: postData.subtitleNotice,
            afterSubtitleText: postData.afterSubtitleText1Notice,
            afterSubtitleText2: postData.afterSubtitleText2Notice,
            title2: postData.Title2Notice,
            afterTitle2Text1: postData.afterTitle2Text1Notice,
            afterTitle2Text2: postData.afterTitle2Text2Notice,
            afterTitle2Text3: postData.afterTitle2Text3Notice,
            image2: postData.image2Notice,
            ImgLegend: postData.imgLegend,
            afterImage2Text1: postData.afterImage2Text1,
            afterImage2Text2: postData.afterImage2Text2,
          }}
          postsRecentesTitle="Posts Recentes"
          postsRecentesLink="/blog"
          postCards={recentPosts.map(post => ({
            id: post.id, 
            image: post.imagePostBanner1,
            title: post.title,
            link: ``
          }))}
        />
    */


    <div className="PostContainer">
      <div className='post-notice-container'>
        <PostBodyNotice {...bodyNoticeProps} />
      </div>

      <MenuPost title={postsRecentesTitle} textLinkPost="Ver Todos os Posts" linkTo={postsRecentesLink} />

      <div className='postsCards-container'>
        {postCards.map((card ) => (
          <PostCard key={card.id} id={card.id} image={card.image} title={card.title}  link={card.link}/>
        ))}
      </div>
    </div>
  );
};

export default PostContainer;

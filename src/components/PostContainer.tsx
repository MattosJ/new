import {Link} from 'react-router-dom'
import "../components/styles/Posts.css"
import PostCard from './PostCard';
import image from "../assets/10.png"
import PostSideMenu from './PostSideMenu';
import PostBodyNotice from './PostBodyNotice';
interface PostContainerProps{
  title : string;
  textLinkPost : string;
}
const PostContainer:React.FC<PostContainerProps> = ({title,textLinkPost}) => {
  return(
    <>
    <div className="PostContainer">
     <div className='post-notice-container'>
      <PostSideMenu item1='lorem' item2='lorem' item3='lorem' item4='lorem' item5='lorem' item6='lorem' item7='lorem' item8='lorem' item9='lorem' item10='lorem' item11='lorem' item12='lorem' item13='lorem' item14='lorem' item15='lorem' item16='lorem' title='Categorias'/>
      <PostBodyNotice initText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis augue mauris, a ultricies neque porttitor id. Ut lobortis felis lorem, ut fermentum dui gravida ut. Pellentesque euismod commodo semper. In ullamcorper magna id feugiat tristique. Phasellus non tortor accumsan lectus pellentesque aliquet. Vivamus vel massa quis purus ultricies faucibus. Nulla dui tortor, ornare non feugiat non, gravida pretium dolor. Donec nibh lorem, tempor at ipsum a, mattis tempor odio.
' title1='Isso é um título' descriptionTitle1='Vivamus porttitor leo faucibus ex faucibus fringilla eget in metus. Nunc eget est at eros maximus fermentum. Nam tincidunt leo sed tincidunt feugiat. Donec nec urna non arcu congue ullamcorper sit amet sit amet tortor. Nam nec tincidunt magna, sit amet porttitor purus. Praesent in ante non nibh viverra placerat lacinia sit amet ligula. Fusce nunc nunc, auctor quis fringilla et, fringilla ac libero. Quisque vitae sapien id ipsum fermentum fringilla. Curabitur leo magna, convallis sed nisi ac, vestibulum ullamcorper felis. Sed sit amet tincidunt neque. Cras non tempus purus. Nunc mauris diam, imperdiet eu laoreet ac, placerat vitae purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis sed nisl quis enim consectetur venenatis sit amet eu lacus.
' image={image} textAfterImage='
Donec id molestie ex. In sodales sapien cursus, bibendum eros et, aliquet neque. Nulla vehicula rutrum arcu sed mattis. Suspendisse potenti. Sed interdum tellus sed risus faucibus, id malesuada diam aliquet. Cras suscipit aliquet magna, at ullamcorper erat. Vestibulum commodo augue ut interdum varius. Ut a consequat massa. Fusce fringilla, sem at porta porta, augue tortor tristique mauris, a pellentesque tortor ex eu massa. Donec felis felis, blandit vel ex eget, molestie suscipit felis.
' listItem1='item a' listItem2='Item b' listItem3='Item C' listItem4='Item D' subtitle='Subtítulo' afterSubtitleText='ivamus vel lacus dui. Morbi dapibus orci sit amet lectus semper tincidunt. Phasellus at fringilla nulla. Vestibulum quis sollicitudin urna, at suscipit neque. Nunc sodales lacus varius, eleifend elit in, hendrerit quam. Aenean in hendrerit felis, eget congue orci. Nam rutrum tincidunt blandit. Phasellus urna diam, pretium ut gravida eget, tincidunt et elit. Ut consequat hendrerit quam eget molestie. Donec tempor nec magna nec lacinia. Praesent eget lacus vel tellus consectetur porttitor nec a quam. Aenean nec laoreet nisl. Pellentesque dignissim mauris eget porta tincidunt. Nulla suscipit ullamcorper erat, eget rutrum augue. Curabitur ullamcorper luctus erat, sed hendrerit metus feugiat vitae. Morbi molestie tellus ut imperdiet luctus.
'   afterSubtitleText2='Suspendisse potenti. Pellentesque volutpat quam leo, a sollicitudin ligula tincidunt semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Sed maximus augue nec hendrerit efficitur. Donec cursus scelerisque felis, nec consequat leo. Vivamus tortor velit, volutpat nec dui nec, lacinia vehicula nulla. Nunc dictum congue nisl, eget suscipit odio vulputate nec.
' title2='Isto é um título' afterTitle2Text1='Mauris auctor turpis sit amet nisi posuere, condimentum tincidunt diam consectetur. Proin efficitur purus quis tincidunt feugiat. Vestibulum est enim, vulputate vitae blandit eu, maximus ut nisl. Quisque consequat vitae ligula vel mattis. Nunc vulputate dolor id tortor dignissim, in vestibulum dolor ullamcorper. Proin nec semper justo. Nam vulputate venenatis luctus. Nullam a lorem ligula. Donec sollicitudin justo ac lobortis condimentum. Etiam sagittis elit sed iaculis convallis. In dictum, sapien sit amet scelerisque hendrerit, neque purus euismod augue, eget scelerisque velit lectus nec libero. Quisque quam ipsum, tristique at libero in, egestas tempus risus. In posuere congue tellus, nec molestie nisi convallis vitae. Ut feugiat, dui non finibus scelerisque, neque enim varius est, ac condimentum nisi nibh vitae tortor. Nam condimentum magna sed nibh vulputate, sed mollis magna rhoncus. In at turpis et leo egestas dapibus.
' afterTitle2Text2='Duis et dolor porta, vestibulum sem vel, condimentum nisl. Phasellus tempor sem eget sem scelerisque sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent aliquet nunc semper commodo blandit. Nulla eu nisi a erat aliquam mollis. Ut malesuada viverra metus ac convallis.'
  afterTitle2Text3='dignissim, nulla eget sollicitudin lacinia, enim odio lobortis arcu, vitae sagittis risus eros sit amet nulla. Vestibulum varius lacus at nunc tristique imperdiet. Etiam sed tincidunt turpis. Aenean ornare, mi quis cursus semper, dolor enim lacinia risus, id tristique libero lorem gravida metus. Etiam eu mollis eros. Donec at urna nec erat tempus auctor at ut dui.'
  image2={image}
  ImgLegend='Legenda da foto. 25/05/2025'
  afterImage2Text1='dignissim, nulla eget sollicitudin lacinia, enim odio lobortis arcu, vitae sagittis risus eros sit amet nulla. Vestibulum varius lacus at nunc tristique imperdiet. Etiam sed tincidunt turpis. Aenean ornare, mi quis cursus semper, dolor enim lacinia risus, id tristique libero lorem gravida metus. Etiam eu mollis eros. Donec at urna nec erat tempus auctor at ut dui.'
  afterImage2Text2='dignissim, nulla eget sollicitudin lacinia, enim odio lobortis arcu, vitae sagittis risus eros sit amet nulla. Vestibulum varius lacus at nunc tristique imperdiet. Etiam sed tincidunt turpis. Aenean ornare, mi quis cursus semper, dolor enim lacinia risus, id tristique libero lorem gravida metus. Etiam eu mollis eros. Donec at urna nec erat tempus auctor at ut dui.' />
    </div>
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
import Footer from "../components/Footer"
import HeaderInternal from "../components/Header"
import PostContainer from "../components/PostContainer"
import '../components/styles/Pages.css'

const Blog = () =>{
  return(
    <div>
      <HeaderInternal/>
      <div className="Content">
        <PostContainer title="Posts Recentes" textLinkPost="Ver Todos os Posts"/>
      </div>
      <Footer/>
    </div>
  )
}

export default Blog

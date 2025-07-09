import Footer from "../components/Footer"
import HeaderInternal from "../components/Header"
import PostBanner from "../components/PostBanner"
import PostContainer from "../components/PostContainer"
import '../components/styles/Pages.css'
import image from "../assets/10 - Copy.png"

const Blog = () =>{
  return(
    <div>
      <HeaderInternal/>
      <div className="Content">
        <PostBanner Image={image} linkText="<Voltar para o blog" author="James Pereira" date="Julho, 2025" title="Título do Conteúdo"/>
        <PostContainer title="Posts Recentes" textLinkPost="Ver Todos os Posts"/>
      </div>
      <Footer/>
    </div>
  )
}

export default Blog

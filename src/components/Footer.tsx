import '../components/styles/footer.css'
import Facebook from "../assets/facebook (2).png"
import Instagram from "../assets/instagram.png"
import whatsapp from "../assets/WhatsApp.svg"
import Youtube from "../assets/youtube.png"
import { Link } from 'react-router-dom'
const Footer = () =>{
  return <footer className='footer'>
    <div className='menu-1-footer'>
        <div className='logo-footer'>
          <h1>Intera Criativa</h1>
        </div>
        <nav className='redes-sociais-footer'>

          <li><a href=''><img className='redes-sociais-icones-footer' src={Facebook}/></a></li>
          <li><a href=""><img className='redes-sociais-icones-footer' src={whatsapp}/></a></li>
          <li><a href=''><img className='redes-sociais-icones-footer' src={Youtube}/></a></li> 
          <li><a href=''><img className='redes-sociais-icones-footer' src={Instagram}/></a></li> 


        </nav>
    </div>
    <div className='menus-wrapper'>
      <nav className='menu-2-footer'>
        <ul>
          <Link to="/"><li>Ínicio </li></Link>
          <Link to="/servicos"><li>Serviços</li></Link>
          <Link to="/nossos-projetos"><li>Projetos</li></Link>
      </ul>
      </nav>
      <nav className='menu-3-footer'>
        <ul>
          <Link to="/por-onde-passamos"><li>Trajetória </li></Link>
          <Link to="/blog"><li>Blog </li></Link>
          <Link to="/fale-conosco"><li>Contato</li></Link>
        </ul>
      </nav>
    
    </div>


    
  </footer>
}
export default Footer
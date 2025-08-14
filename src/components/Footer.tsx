import '../components/styles/footer.css'
import Facebook from "../assets/facebook (2).png"
import Instagram from "../assets/instagram.png"
import whatsapp from "../assets/WhatsApp.svg"
import Youtube from "../assets/youtube.png"
import { Link } from 'react-router-dom'
const Footer = () =>{
  return(
    /* Exemplo de uso 
      <Footer />
    */
    <footer className='footer'>
    <div className='menu-1-footer'>
        <div className='logo-footer'>
          <h1>Intera Criativa</h1>
        </div>
        <ul className='redes-sociais-footer'>

          <li><a href='https://www.facebook.com/interacriativa' target='_blank'><img className='redes-sociais-icones-footer' src={Facebook} alt='Facebook'/></a></li>
          <li><a href="https://wa.me/5579991196055" target='_blank'><img className='redes-sociais-icones-footer'  src={whatsapp} alt='Whatsapp' /></a></li>
          <li className='redes-sociais-icones-footer-yt'><a href='https://www.youtube.com/@interacriativa846' target='_blank'><img  src={Youtube} alt='Youtube'/></a></li> 
          <li><a href='https://www.instagram.com/interacriativa/' target='_blank'><img className='redes-sociais-icones-footer' src={Instagram} alt='Instagram'/></a></li> 


        </ul>
    </div>
    <div className='menus-wrapper'>
      <nav className='menu-2-footer'>
        <ul>
          <li><Link to="/">Ínicio</Link></li>
          <li><Link to="/servicos">Serviços</Link></li>
          <li><Link to="/nossos-projetos">Projetos</Link></li>
      </ul>
      </nav>
      <nav className='menu-3-footer'>
        <ul>
          <li><Link to="/quem-somos">Quem Somos</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/fale-conosco">Contato</Link></li>
        </ul>
      </nav>
    
    </div>


    
  </footer>
  )
   
}
export default Footer
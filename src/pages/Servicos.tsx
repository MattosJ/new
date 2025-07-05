import BannerTextImage from "../components/BannerTextImage"
import Footer from "../components/Footer"
import HeaderInternal from "../components/Header"
import '../components/styles/Pages.css'
import '../components/styles/Servicos.css'
import bannerImg from "../assets/banner-ti.png"
import ContactBanner from "../components/ContactBanner"



const servicos = () =>{
  return(
    <>
    <div>
      <HeaderInternal/>
      <div className="Content-service">
        <BannerTextImage  title="Soluções criativas para transformar realidades"
        subtitle="A Intera Criativa atua com pessoas, organizações e governos para cocriar projetos com propósito, impacto social e colaboração."
        style={{ backgroundImage: `url(${bannerImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}/>
        <h2 style={{textAlign:"center", fontSize:"3rem"}}>Conheça Nossas Principais Frentes de Atuação</h2>
        <ContactBanner id={0} backgroundColor="#ffffff" titleColor="#000000" subtitleColor="#000000" buttonBackgroundColor="#0097A3" buttonTextColor="#FFFFFF" title="Consultorias e Mentorias" subtitle="Oficinas práticas e colaborativas que despertam o olhar empreendedor e estimulam o fazer coletivo. Ajudamos grupos a desenvolver habilidades como liderança, trabalho em equipe e resolução de problemas, tudo com metodologias lúdicas e envolventes." highlightText="" buttonText="Da ideia à ação: saiba mais..." forWhoColor="#00000"/>
        <ContactBanner id={1} backgroundColor="#ffffff" titleColor="#000000" subtitleColor="#000000" buttonBackgroundColor="#0097A3" buttonTextColor="#FFFFFF" title="Atividades Formativas" subtitle="Apoiamos coletivos e empreendedores em todas as etapas do seu projeto: diagnóstico, planejamento, comunicação e sustentabilidade financeira. Tudo isso com acompanhamento estratégico e conexões valiosas com redes e editais." highlightText="" buttonText="Da ideia à ação: saiba mais..."/>
         <ContactBanner id={2} backgroundColor="#ffffff" titleColor="#000000" subtitleColor="#000000" buttonBackgroundColor="#0097A3" buttonTextColor="#FFFFFF" title="Gestão e Desenvolvimento de Projetos Criativos" subtitle="Criamos jornadas educativas que valorizam o contexto local e incentivam a inovação social. Capacitamos educadores e multiplicadores com conteúdos sobre juventude, sustentabilidade, cultura, cidadania e mais." highlightText="" buttonText="Da ideia à ação: saiba mais..."/>
         <ContactBanner id={3} backgroundColor="#ffffff" titleColor="#000000" subtitleColor="#000000" buttonBackgroundColor="#0097A3" buttonTextColor="#FFFFFF" title="Produções de Eventos" subtitle="Cocriamos estratégias e projetos de impacto junto a governos, institutos e fundações. Atuamos desde o planejamento até a execução, com foco em escuta ativa, articulação de redes e resultados mensuráveis."  highlightText="" buttonText="Da ideia à ação: saiba mais..."/>
        <ContactBanner backgroundColor="#ffffff" titleColor="#000000" subtitleColor="#000000" buttonBackgroundColor="#0097A3" buttonTextColor="#FFFFFF" highlightColor="#000000" forWho="" adtinionalInfo="" id={7}/>
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default servicos 
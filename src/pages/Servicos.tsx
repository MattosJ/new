import BannerTextImage from "../components/BannerTextImage"
import Footer from "../components/Footer"
import HeaderInternal from "../components/Header"
import '../components/styles/Pages.css'
import '../components/styles/Servicos.css'
import bannerImg from "../assets/banner-ti.png"
import ContactBanner from "../components/ContactBanner"
import TopHeader from "../components/TopHeader"



const servicos = () =>{
  return(
    <>
    <div>
      <TopHeader/>
      <HeaderInternal/>
      <div className="Content-service">
        <BannerTextImage  title="Soluções criativas para transformar realidades"
        subtitle="A Intera Criativa atua com pessoas, organizações e governos para cocriar projetos com propósito, impacto social e colaboração."
        style={{ backgroundImage: `url(${bannerImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}/>
        <h2 className="service-h2" style={{textAlign:"center"}}>Conheça Nossas Principais Frentes de Atuação</h2>
        <ContactBanner id={0} backgroundColor="#ffffff" titleColor="#000000" subtitleColor="#000000" buttonBackgroundColor="#0097A3" buttonTextColor="#FFFFFF" title=" Gestão Pública da Cultura" subtitle="Oferecemos consultoria técnica especializada para governos e instituições públicas que desejam fortalecer suas políticas culturais. Atuamos na construção, execução e avaliação de programas como a Política Nacional Aldir Blanc (PNAB), a Lei Paulo Gustavo, e outros marcos importantes para a cultura.
Desenvolvemos metodologias participativas, elaboração de editais, planos de ação, diagnósticos, instrumentos normativos e relatórios de impacto. Trabalhamos lado a lado com gestões comprometidas em ampliar o acesso, promover diversidade e estruturar o campo cultural com planejamento e visão de futuro." 
highlightText="" buttonText="Da ideia à ação: saiba mais..." forWhoColor="#00000"/>

        <ContactBanner id={1} backgroundColor="#ffffff" titleColor="#000000" subtitleColor="#000000" buttonBackgroundColor="#0097A3" buttonTextColor="#FFFFFF" title="Projetos Criativos e Mentoria Artística" subtitle="Apoiamos profissionais da cultura e da economia criativa no desenvolvimento de projetos que unem identidade, inovação e viabilidade. Nossa mentoria é voltada para artistas, instituições públicas, privadas, coletivos, marcas e empreendedores criativos que desejam estruturar suas ideias, fortalecer sua narrativa e apresentá-las de forma sólida.
Combinamos escuta qualificada e planejamento estratégico para transformar iniciativas criativas em propostas consistentes, prontas para editais, captação, pitchings ou execução direta. Atuamos em múltiplas linguagens e formatos, respeitando a singularidade de cada proposta e ajudando a expandir seu alcance e impacto." highlightText="" buttonText="Da ideia à ação: saiba mais..."/>

         <ContactBanner id={2} backgroundColor="#ffffff" titleColor="#000000" subtitleColor="#000000" buttonBackgroundColor="#0097A3" buttonTextColor="#FFFFFF" title="Mentoria em Eventos e Conexões Criativas" subtitle="Pensar, planejar e produzir eventos culturais pode ser desafiador — por isso, conectamos profissionais de Sergipe das mais diversas áreas – artistas, técnicos, fornecedores e prestadores de serviço – para facilitar e viabilizar a produção de eventos culturais. Ajudamos desde a concepção da ideia até a gestão do cronograma, orçamentos, contratações, documentação, produção executiva e comunicação. Tudo com sensibilidade local e foco na excelência." highlightText="" buttonText="Da ideia à ação: saiba mais..."/>

         <ContactBanner id={3} backgroundColor="#ffffff" titleColor="#000000" subtitleColor="#000000" buttonBackgroundColor="#0097A3" buttonTextColor="#FFFFFF" title=" Financiamento da Cultura" subtitle="Desenvolvemos estratégias para garantir que boas ideias encontrem os recursos que merecem. Atuamos com consultoria em captação de recursos por meio de editais públicos, leis de incentivo à cultura (como a Lei Rouanet), patrocínios diretos e outras formas de fomento.
Oferecemos apoio na elaboração de propostas, formatação de orçamentos, definição de contrapartidas, estruturação de planos de captação e acompanhamento da execução, garantindo solidez e clareza em todas as etapas."  highlightText="" buttonText="Da ideia à ação: saiba mais..."/>
        <ContactBanner backgroundColor="#ffffff" titleColor="#000000" subtitleColor="#000000" buttonBackgroundColor="#0097A3" buttonTextColor="#FFFFFF" highlightColor="#000000" forWho="" adtinionalInfo="" id={7}/>
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default servicos 
import "../components/styles/main.css"
import BannerTextImage from "./BannerTextImage";
import bannerImg from "../assets/banner-ti.png"
import CardGrid from "./CardGrid";
import ContactBanner from "../components/ContactBanner";

const Main = () => {
  return (
    <div className="main-container">
      <BannerTextImage  title="Soluções criativas para transformar realidades"
        subtitle="A Intera Criativa atua com pessoas, organizações e governos para cocriar projetos com propósito, impacto social e colaboração."
        style={{ backgroundImage: `url(${bannerImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}/>
      <CardGrid/>
      <ContactBanner id={1} forWho="" adtinionalInfo="" titleColor="#FFFFFF"/>
    </div>
  );
};

export default Main;
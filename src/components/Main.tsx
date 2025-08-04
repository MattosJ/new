import "../components/styles/main.css"
import BannerTextImage from "./BannerTextImage";
import bannerImg from "../assets/banner-ti.png"
import CardGrid from "./CardGrid";
import ContactBanner from "../components/ContactBanner";

const Main = () => {
  return (
    <div className="main-container">
      <BannerTextImage  title="Conecta, Cria e Transforma!"
        subtitle="Aqui, construímos pontes para um mundo mais colaborativo, justo e criativo."
        style={{ backgroundImage: `url(${bannerImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}/>
      <CardGrid/>
      <ContactBanner id={1} forWho="" adtinionalInfo="" titleColor="#FFFFFF"/>
    </div>
  );
};

export default Main;
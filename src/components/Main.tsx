import "../components/styles/main.css"
import BannerTextImage from "./BannerTextImage";
import bannerImg from "../assets/banner-ti.png"
import CardGrid from "./CardGrid";
import ContactBanner from "../components/ContactBanner";
import ObjectMDecoretionM2 from "./ObjectDecoretionM2";
import ObjectPDecoretion from "./ObjectPDecoretion";

const Main = () => {
  return (
    <div className="main-container">
      <BannerTextImage  title="Conecta, Cria e Transforma!"
        subtitle="Aqui, construímos pontes para um mundo mais colaborativo, justo e criativo."
        style={{ backgroundImage: `url(${bannerImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}/>
      <CardGrid/>
      <ContactBanner id={1} forWho="" adtinionalInfo="" titleColor="#FFFFFF"/>
      <ObjectMDecoretionM2 style={{position:'absolute', bottom:"-60px", right:"50%" }}/>
    <ObjectPDecoretion style={{position : 'absolute', bottom:'-60px' , right:'48%', backgroundColor : '#FEC820'}} />
    </div>
  );
};

export default Main;
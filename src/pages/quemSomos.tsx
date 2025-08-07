import Footer from "../components/Footer";
import '../components/styles/Pages.css'
import '../components/styles/QuemSomos.css'
import HeaderInternal from "../components/Header";
import ContactBanner from "../components/ContactBanner";
import BannerWho from "../components/BannerWho";
import TopHeader from "../components/TopHeader";
import CardsContainer from "../components/CardsContainer";



const QuemSomos = () => {
  return(
    <div>
      <TopHeader/>
      <HeaderInternal/>
        <div className="Content-quemsomos">
          <BannerWho/>
          <CardsContainer/>
          <ContactBanner id={1} forWho="" adtinionalInfo="" titleColor="#FFFFFF"/>
        </div>
      <Footer/>
    </div>
  )
};
export default QuemSomos;
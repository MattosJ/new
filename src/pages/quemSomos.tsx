import Footer from "../components/Footer";
import '../components/styles/Pages.css'
import '../components/styles/QuemSomos.css'
import HeaderInternal from "../components/Header";
import ContactBanner from "../components/ContactBanner";
import BannerWho from "../components/BannerWho";
import TopHeader from "../components/TopHeader";
import CardsContainer from "../components/CardsContainer";
import ObjectMDecoretionM2 from "../components/ObjectDecoretionM2";
import ObjectPDecoretion from "../components/ObjectPDecoretion";



const QuemSomos = () => {
  return(
    <>
    
    <div className="quemSomos">
      <TopHeader/>
      <HeaderInternal/>
        <div className="Content-quemsomos">
          <BannerWho/>
          <CardsContainer/>
          <ContactBanner id={1} forWho="" adtinionalInfo="" titleColor="#FFFFFF"/>
          <ObjectMDecoretionM2 style={{position:'absolute', bottom:"-60px", right:"50%" }}/>
          <ObjectPDecoretion style={{position : 'absolute', bottom:'-60px' , right:'48%', backgroundColor : '#FEC820'}} />
        </div>
      
    </div>
    <Footer/>
    </>
  )
};
export default QuemSomos;
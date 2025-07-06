import Footer from "../components/Footer";
import '../components/styles/Pages.css'
import '../components/styles/QuemSomos.css'
import HeaderInternal from "../components/Header";
import ContactBanner from "../components/ContactBanner";
import BannerTextImage2 from "../components/BannerTextImage2";
import PeopleCard from "../components/PeopleCard";


const QuemSomos = () => {
  return(
    <div>
      <HeaderInternal/>
        <div className="Content-quemsomos">
          <BannerTextImage2/>
          <PeopleCard/>
          <ContactBanner id={1} forWho="" adtinionalInfo="" titleColor="#FFFFFF"/>
        </div>
      <Footer/>
    </div>
  )
};
export default QuemSomos;
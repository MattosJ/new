import Footer from "../components/Footer";
import '../components/styles/Pages.css'
import '../components/styles/QuemSomos.css'
import HeaderInternal from "../components/Header";
import ContactBanner from "../components/ContactBanner";


const QuemSomos = () => {
  return(
    <div>
      <HeaderInternal/>
        <div className="Content-quemsomos">
          <ContactBanner id={1} forWho="" adtinionalInfo="" titleColor="#FFFFFF"/>
        </div>
      <Footer/>
    </div>
  )
};
export default QuemSomos;
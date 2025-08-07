import Footer from "../components/Footer"
import HeaderInternal from "../components/Header"
import ContactCard from "../components/ContactCard"
import TopHeader from "../components/TopHeader"


const FaleComnosco = () =>{
  return(
    <div>
      <TopHeader/>
      <HeaderInternal/>
      <div className="">
        <ContactCard/>
      </div>
      <Footer/>
    </div>
  )
}

export default FaleComnosco
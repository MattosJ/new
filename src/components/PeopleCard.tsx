import "../components/styles/peopleCard.css"
import imagem from "../assets/Alisson.png"
import PresentationCard from "./PresentationCard"
const PeopleCard = () =>{
  return(
    <>
      <div className="peopleCard-wrapper">
        <h2 className="peopleCard-title">Quem faz tudo acontecer</h2>
        <div className="peopleCard-container-cards">
          <PresentationCard image={imagem} fullName="Nome Completo" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis augue mauris, a ultricies neque porttitor id. Ut lobortis felis lorem, ut fermentum dui gravida ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis augue mauris, a ultricies neque porttitor id. Ut lobortis felis lorem, ut fermentum dui gravida ut."/>
          <PresentationCard image={imagem} fullName="Nome Completo" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis augue mauris, a ultricies neque porttitor id. Ut lobortis felis lorem, ut fermentum dui gravida ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis augue mauris, a ultricies neque porttitor id. Ut lobortis felis lorem, ut fermentum dui gravida ut."/>
          <PresentationCard image={imagem} fullName="Nome Completo" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis augue mauris, a ultricies neque porttitor id. Ut lobortis felis lorem, ut fermentum dui gravida ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis augue mauris, a ultricies neque porttitor id. Ut lobortis felis lorem, ut fermentum dui gravida ut."/>
          <PresentationCard image={imagem} fullName="Nome Completo" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis augue mauris, a ultricies neque porttitor id. Ut lobortis felis lorem, ut fermentum dui gravida ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mattis augue mauris, a ultricies neque porttitor id. Ut lobortis felis lorem, ut fermentum dui gravida ut."/>
        </div>
        
        
      </div>
    </>
  )
}

export default PeopleCard
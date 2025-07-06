
interface PresentationCardProps{
  image : string;
  fullName : string;
  description:string;
}

const PresentationCard: React.FC<PresentationCardProps> = ({image,fullName,description}) => {
  return(
    <div className="presentation-card">
      <div className="presentation-img">
        <img src={image}/>
      </div>
      <div className="presentation-name">
        <h4>{fullName}</h4>
      </div>
      <div className="presentation-description">
          <p>{description}</p>
      </div>
    </div>

   

  )
}

export default PresentationCard
import "../components/styles/publiBanner.css"
import Banner from "../assets/10.png";
const PubliBanner = () => {
    return(
        <div className="BannerPubli-container">
            <div className="BannerPubli-img">
                <img src={Banner}/>
            </div>
        </div>
    )
}

export default PubliBanner;
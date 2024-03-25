import Style from "./style";
import Whatsapp from "../../assets/img/Whatsapp.webp"
import Gmail from "../../assets/img/Gmail.webp"
import Linkedin from "../../assets/img/Linkedin.webp"

interface Card3Props {
    img: string,
    name: string,
    oab: string
    description: string
}

export default function Card3({description,img,name,oab}: Card3Props){
    return(
        <Style.Container>
              <img className="people" src={img} alt={name}/>
                    <h6>{name}</h6>
                    <p className="oab">{oab}</p>

                    <span className="socialContainer">
                        <img className="social" src={Whatsapp} alt="Whatsapp"/>
                        <img className="social" src={Gmail} alt="Gmail"/>
                        <img className="social"  src={Linkedin} alt="Linkedin"/>
                    </span>

                    <p className="description">{description}</p>
        </Style.Container>
    )
}
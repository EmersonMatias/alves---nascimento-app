import Style from "./style";
import Whatsapp from "../../assets/img/Whatsapp.webp"
import Gmail from "../../assets/img/Gmail.webp"
import Linkedin from "../../assets/img/Linkedin.webp"
import { GenericButton } from "../ui/generic-button";

interface Card3Props {
    img: string,
    name: string,
    oab: string
    description: string,
    sendToWpp: () => Window | null,
    sendToGmail: () => Window | null,
    sendToLinkedin: () => Window | null
}

export default function Card3({ description, img, name, oab, sendToWpp, sendToGmail, sendToLinkedin }: Card3Props) {
    return (
        <Style.Container>
            <img className="people" src={img} alt={name} />
            <h6>{name}</h6>
            <p className="oab">{oab}</p>

            <span className="socialContainer">
                <GenericButton onClick={sendToWpp}><img className="social" src={Whatsapp} alt="Whatsapp" /></GenericButton>
                <GenericButton onClick={sendToGmail}><img className="social" src={Gmail} alt="Gmail" /></GenericButton>
                <GenericButton onClick={sendToLinkedin}><img className="social" src={Linkedin} alt="Linkedin" /></GenericButton>
            </span>

            <p className="description">{description}</p>
        </Style.Container>
    )
}
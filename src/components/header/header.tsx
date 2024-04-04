import Style from "./style";
import Instagram from "../../assets/svg/Instagram.svg"
import Facebook from "../../assets/svg/Facebook.svg"
import Whatsapp from "../../assets/svg/WhatsappGreen.svg"
import Logo from "../../assets/svg/Logo.svg"
import { sendToFacebook, sendToInstagram, sendToWpp } from "../../utils/send-to-social";
import { GenericButton } from "../ui/generic-button";

export default function Header() {

   
    return (
        <Style.Container>

            <Style.Logo src={Logo} alt="Logo"/>
            <Style.Box1>
                <h6><a href="#herosection">Inicio</a></h6>
                <h6><a href="#section2">Áreas de atuação</a></h6>
                <h6><a href="#section4">Equipe</a></h6>
                <h6><a href="#section5">Contato</a></h6>
            </Style.Box1>

            <Style.Box2>
                <GenericButton onClick={sendToWpp}> <img className="icon" src={Whatsapp} alt="Icone do Whatsapp" /></GenericButton>
                <GenericButton onClick={sendToInstagram}><img className="icon" src={Instagram} alt="Icone do Instagram" /></GenericButton>
                <GenericButton onClick={sendToFacebook}> <img className="icon" src={Facebook} alt="Icone do Facebook" /></GenericButton>
            </Style.Box2>

        </Style.Container>
    )
}
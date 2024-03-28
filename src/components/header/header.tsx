import Style from "./style";
import Instagram from "../../assets/img/Instagram.webp"
import Facebook from "../../assets/img/Facebook.webp"
import Whatsapp from "../../assets/img/Whatsapp.webp"
import Logo from "../../assets/svg/Logo.svg"
import { sendToFacebook, sendToInstagram } from "../../utils/send-to-social";
import { GenericButton } from "../ui/generic-button";

export default function Header() {

   
    return (
        <Style.Container>

            <Style.Logo src={Logo} alt="Logo" />
            <Style.Box1>
                <h6><a href="herosection">Inicio</a></h6>
                <h6><a href="#section2">Áreas de atuação</a></h6>
                <h6><a href="#section4">Equipe</a></h6>
                <h6><a href="#section5">Contato</a></h6>
            </Style.Box1>



            <Style.Box2>
                <GenericButton> <img src={Whatsapp} alt="Whatsapp" /></GenericButton>
                <GenericButton onClick={sendToInstagram}><img src={Instagram} alt="Instagram" /></GenericButton>
                <GenericButton onClick={sendToFacebook}> <img src={Facebook} alt="Facebook" /></GenericButton>
            </Style.Box2>




        </Style.Container>
    )
}
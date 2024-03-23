import Style from "./style";
import Instagram from "../../assets/img/Instagram.webp"
import Facebook from "../../assets/img/Facebook.webp"
import Whatsapp from "../../assets/img/Whatsapp.webp"
import Logo from "../../assets/svg/Logo.svg"

export default function Header() {
    return (
        <Style.Container>

            <Style.Logo src={Logo} alt="Logo"/>
            <Style.Box1>
                <h6>Inicio</h6>
                <h6>Áreas de atuação</h6>
                <h6>Equipe</h6>
                <h6>Contato</h6>
            </Style.Box1>



            <Style.Box2>
                <img src={Whatsapp} alt="Whatsapp" />
                <img src={Instagram} alt="Instagram" />
                <img src={Facebook} alt="Facebook" />
            </Style.Box2>




        </Style.Container>
    )
}
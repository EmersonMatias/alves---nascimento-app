import Style from "./style";
import Logo from "../../assets/svg/Logo.svg"
import Whatsapp from "../../assets/img/Whatsapp.webp"
import Gmail from "../../assets/img/Gmail.webp"
import Location from "../../assets/img/Location.webp"
import Instagram from "../../assets/img/Instagram.webp"
import Facebook from "../../assets/img/Facebook.webp"
import { GenericButton } from "../ui/generic-button";
import { sendToInstagram } from "../../utils/send-to-social";

export default function Footer() {
    return (
        <Style.Container>
            <Style.Box1>
                <div className="left">
                    <h6 className="title">Atendimento</h6>

                    <div className="social"><img src={Whatsapp} alt="Whatsapp" /> <p>Whatsapp</p></div>
                    <div className="social"><img src={Gmail} alt="Gmail" /> <p>Gmail</p></div>
                </div>

                <Style.Logo src={Logo} alt="Logo Armando & Nascimento" />

                <div className="right">
                    <h6 className="title">Siga-nos</h6>
                    <GenericButton className="social" onClick={sendToInstagram}> <img src={Instagram} alt="Instagram" /> <p>Instagram</p></GenericButton>
                    <div className="social"  ><img src={Facebook} alt="Facebook" /> <p>Facebook</p></div>


                </div>
            </Style.Box1>

            <Style.Box2>
                <div className="social location"><img src={Location} alt="Location" /> <p>Rua Amazonas, 1.422 - Campos Elísios Ribeirão Preto - SP</p></div>

                Copyright 2024. Alves & Nascimento Advocacia. Todos os direitos reservados.
            </Style.Box2>
        </Style.Container>
    )
}
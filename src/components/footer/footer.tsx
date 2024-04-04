import Style from "./style";
import Logo from "../../assets/svg/Logo.svg"
import Whatsapp from "../../assets/svg/WhatsappGreen.svg"
import Gmail from "../../assets/svg/Gmail.svg"
import Location from "../../assets/img/Location.webp"
import Instagram from "../../assets/svg/Instagram.svg"
import Facebook from "../../assets/svg/Facebook.svg"
import { GenericButton } from "../ui/generic-button";
import { sendToFacebook, sendToGmail, sendToInstagram, sendToWpp } from "../../utils/send-to-social";

export default function Footer() {
    return (
        <Style.Container>
            <Style.Box1>
                <div className="left">
                    <h6 className="title">Atendimento</h6>

          
                    <GenericButton className="social" onClick={sendToWpp}><img src={Whatsapp} alt="Whatsapp" /> <p>Whatsapp</p></GenericButton>
                    <GenericButton className="social" onClick={sendToGmail}><img src={Gmail} alt="Gmail" /> <p>Gmail</p></GenericButton>
                 
                </div>

                <Style.Logo src={Logo} alt="Logo Armando & Nascimento"/>

                <div className="right">
                    <h6 className="title">Siga-nos</h6>
                    <GenericButton className="social" onClick={sendToInstagram}> <img src={Instagram} alt="Instagram" /> <p>Instagram</p></GenericButton>
                    <GenericButton className="social" onClick={sendToFacebook}><img src={Facebook} alt="Facebook" /> <p>Facebook</p></GenericButton>
                </div>
            </Style.Box1>

            <Style.Box2>
                <div className="social location"><img src={Location} alt="Location" /> <p>Rua Amazonas, 1.422 - Campos Elísios Ribeirão Preto - SP</p></div>

                Copyright 2024. Alves & Nascimento Advocacia. Todos os direitos reservados.
            </Style.Box2>
        </Style.Container>
    )
}
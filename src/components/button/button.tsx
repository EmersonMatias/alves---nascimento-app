import { ComponentProps, useEffect } from "react";
import Style from "./style";
import Whatsapp from "../../assets/svg/Whatsapp.svg"
import { sendToWpp } from "../../utils/send-to-social";
import TagManager from "react-gtm-module"

type ButtonProps = ComponentProps<'button'>


export default function Button({ children }: ButtonProps) {

    useEffect(() => {
        const tagManagerArgs = {
            gtmId: "GTM-TPGNWXR5"
        }

        TagManager.initialize(tagManagerArgs)
    }, [])


    return (
        <Style.Container onClick={sendToWpp} id="buttonAds">
            {children}
            <img src={Whatsapp} alt="Icone do" />
        </Style.Container>
    )
}
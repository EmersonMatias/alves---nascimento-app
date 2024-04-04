import { ComponentProps } from "react";
import Style from "./style";
import Whatsapp from "../../assets/svg/Whatsapp.svg"
import { sendToWpp } from "../../utils/send-to-social";

type ButtonProps = ComponentProps<'button'>

export default function Button({ children }: ButtonProps) {
    return (
        <Style.Container onClick={sendToWpp}>
            {children}
            <img src={Whatsapp} alt="Icone do Whatsapp" />
        </Style.Container>
    )
}
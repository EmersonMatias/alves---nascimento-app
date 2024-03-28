import { ComponentProps } from "react";
import Style from "./style";
import Whatsapp from "../../assets/img/Whatsapp.webp"
import { sendToWpp } from "../../utils/send-to-social";

type ButtonProps = ComponentProps<'button'>

export default function Button({ children }: ButtonProps) {
    return (
        <Style.Container onClick={sendToWpp}>
            {children}
            <img src={Whatsapp} alt="Whatsapp" />
        </Style.Container>
    )
}
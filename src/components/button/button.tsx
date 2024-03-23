import { ComponentProps } from "react";
import Style from "./style";
import Whatsapp from "../../assets/img/Whatsapp.webp"

type ButtonProps = ComponentProps<'button'>

export default function Button({children}: ButtonProps){
    return(
        <Style.Container>
            {children}
            <img src={Whatsapp} alt="Whatsapp"/>
        </Style.Container>
    )
}
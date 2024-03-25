import Style from "./style";
import RightArrow from "../../assets/svg/RightArrow.svg"

export default function Line({title}: {title: string}){
    return(
        <Style.Container>
           <img className="rightArrow" src={RightArrow} alt="Seta para Esquerda"/>
           <p>{title}</p>
        </Style.Container>
    )
}
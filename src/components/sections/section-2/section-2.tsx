import Style from "./style";
import Card from "../../card/card";
import { Section2Contents } from "../../../utils/section-2-constants";

export default function Section2() {
    return (
        <Style.Container>
            <h2>Áreas de Atuação</h2>
            <h5>Algumas das áreas que são nossa especialidade</h5>

            <Style.Box1>
                {Section2Contents.map(({ alt, description, img, side, title }) => {
                    return <Card key={title} title={title} description={description} img={img} alt={alt} side={side} />
                })}
            </Style.Box1>


        </Style.Container>
    )
}
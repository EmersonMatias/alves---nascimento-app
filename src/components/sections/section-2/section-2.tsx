import Style from "./style";
import Card from "../../card/card";
import { Section2Contents } from "../../../utils/section-2-constants";
import { Bold } from "../hero-section/style";
import Button from "../../button/button";

export default function Section2() {
    return (
        <Style.Container id="section2">
            <h2>Áreas de Atuação</h2>
            <h5>Algumas das áreas que são nossa especialidade</h5>

            <Style.Box1>
                {Section2Contents.map(({ alt, description, img, side, title, subareas }) => {
                    return <Card key={title} title={title} description={description} img={img} alt={alt} side={side} subareas={subareas} />
                })}
            </Style.Box1>


            <Style.Box2>
                <h3>Precisando de auxilio em uma dessas áreas?</h3>
                <p>Clique no botão abaixo e tire suas dúvida <Bold>AGORA</Bold> com um de nossos advogados.</p>
                <Button>Quero tirar minha dúvida</Button>
            </Style.Box2>



        </Style.Container>
    )
}
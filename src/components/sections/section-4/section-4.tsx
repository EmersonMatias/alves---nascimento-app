import Style from "./style";
import Card3 from "../../card-3/card-3";
import { Section4Contents } from "../../../utils/section-4-constants";


export default function Section4() {
    return (
        <Style.Container id="section4">
            <Style.Box1>
                <h2>Equipe</h2>
                <h5>Um pouco mais sobre nossa equipe de especialistas</h5>
            </Style.Box1>

            <Style.Box2>
                {Section4Contents.map(({ img, description, name, oab, sendToWpp, sendToGmail, sendToLinkedin }) => {
                    return <Card3 key={name} description={description} name={name} oab={oab} img={img} sendToWpp={sendToWpp} sendToGmail={sendToGmail} sendToLinkedin={sendToLinkedin} />
                })}
            </Style.Box2>

        </Style.Container>
    )
}
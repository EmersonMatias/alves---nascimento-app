import { Section3Contents } from "../../../utils/section-3-constants";
import Card2 from "../../card-2/card-2";
import Style from "./style";

export default function Section3() {
    return (
        <Style.Container>
            <h2>Nossos Diferneciais</h2>

            <Style.Box1>
                {Section3Contents.map(({ description, img, title }) => {
                    return <Card2 key={title} description={description} title={title} img={img} />
                })}
            </Style.Box1>

        </Style.Container>
    )
}
import Style from "./style";
import { Section5Contents } from "../../../utils/section-5constants";
import Escritorio from "../../../assets/img/Escritorio.webp"
import Location from "../../../assets/img/Location.webp"
import Form from "../../form/form";

export default function Section5() {
    return (
        <Style.Container>
            <Style.Box1>
                <div className="leftContent">
                    <h2>Contato</h2>
                    <h5>Estamos sempre prontos para lhe atender</h5>
                    <div className="socialContainer">
                        {Section5Contents.map(({ img, name }) => {
                            return <div className="socialContent" key={name}>
                                <img src={img} alt={name} />
                                <h6>{name}</h6>
                            </div>
                        })}

                    </div>
                </div>

                <div className="rightContent">
                    <Form/>
                </div>

            </Style.Box1>

            <Style.Box2>
                <img className="escritorio" src={Escritorio} alt="Escritório"/>

                <div className="rightContent">
                    <h5>Ou se preferir, venha nos visitar</h5>

                    <span className="location">
                        <img src={Location} alt="Localização"/>
                        <p>Rua Amazonas, XXX<br/>Ribeirão Preto - SP </p>
                    </span>
                </div>
            </Style.Box2>
    
        </Style.Container>
    )
}
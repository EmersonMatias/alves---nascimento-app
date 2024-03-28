import Style from "./style";
import { Section5Contents } from "../../../utils/section-5constants";
import Escritorio from "../../../assets/img/Escritorio.webp"
import Location from "../../../assets/img/Location.webp"
import Form from "../../form/form";
import { GenericButton } from "../../ui/generic-button";

export default function Section5() {
    return (
        <Style.Container id="section5">
            <Style.Box1>
                <div className="leftContent">
                    <h2>Contato</h2>
                    <h5>Estamos sempre prontos para lhe atender</h5>
                    <div className="socialContainer">
                        {Section5Contents.map(({ img, name,link }) => {
                            return <div className="socialContent" key={name}>
                                <GenericButton className="socialContent" onClick={link}>
                                    <img src={img} alt={name} />
                                    <h6>{name}</h6>
                                </GenericButton>


                            </div>
                        })}

                    </div>
                </div>

                <div className="rightContent">
                    <Form />
                </div>

            </Style.Box1>

            <Style.Box2>
                <img className="escritorio" src={Escritorio} alt="Escritório" />

                <div className="rightContent">
                    <h5>Ou se preferir, venha nos visitar</h5>

                    <span className="location">
                        <img src={Location} alt="Localização" />
                        <p>Rua Amazonas, 1.422<br />Campos Elisios <br />Ribeirão Preto - SP </p>
                    </span>
                    <iframe className="maps" title="Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1106.1549540075132!2d-47.8019014274673!3d-21.166444243096286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bfaaefb6e67f%3A0x5cf3c5c1bd28fd2!2sR.%20Amazonas%2C%201422%20-%20Campos%20El%C3%ADsios%2C%20Ribeir%C3%A3o%20Preto%20-%20SP%2C%2014085-470!5e0!3m2!1spt-BR!2sbr!4v1711649512258!5m2!1spt-BR!2sbr" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
            </Style.Box2>
        </Style.Container>
    )
}
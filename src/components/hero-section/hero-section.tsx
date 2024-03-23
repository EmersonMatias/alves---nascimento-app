import Button from "../button/button";
import Header from "../header/header";
import Style, { Bold } from "./style";

export default function HeroSection() {
    return (
        <Style.Container>
            <Header />

            <Style.Box1>
                <h5>Seus direitos são nossa prioridade</h5>
                <h1>Alves <span className="fontSize">&</span> <br /> Nascimento</h1>
                <h5><Bold>Advocacia Especializada</Bold></h5>
                <h5 className="areas">CIVIL | TRABALHISTA | PREVIDENCIÁRIO (INSS)</h5>
                <h5 className="areas">DIREITO DE FAMILIA | DIREITO CIVIL</h5>
            </Style.Box1>

            <Style.Box2>
                <h5>
                    <Bold>Compromisso</Bold> e <Bold>competência</Bold>  unidos para entregar
                    <Bold> soluções jurídicas </Bold> personalizadas, assegurando transparência,
                    agilidade e<Bold> qualidade em todos os processos.</Bold>
                </h5>

                <Button>Fale com um especialista</Button>

                <h6 className="info1">Atendemos online<br /> em todo o  Brasil</h6>
                <h6 className="info2">Atendimento presencial<br /> em Ribeirão Preto - SP</h6>

            </Style.Box2>

            <Style.Background />

        </Style.Container>
    )
}
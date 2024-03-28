import MarceloImg from "../assets/img/Marcelo.webp"
import ArmandoImg from "../assets/img/Armando.webp"
import { sendToGmailArmando, sendToGmailMarcelo, sendToLinkedinArmando, sendToLinkedinMarcelo, sendToWppArmando, sendToWppMarcelo } from "./send-to-social"

export const Section4Contents = [
    {
        img: MarceloImg,
        name: "Marcelo A A Filho",
        description: "Graduado pela UNIFAFIBE (2009-2013), Marcelo acumula mais de uma década de experiência. Ao longo de sua trajetória, já prestou auxílio a um número significativo de pessoas, tendo gerenciado mais de 500 casos documentados no Jusbrasil. Reconhecido por seu comprometimento, Marcelo é um profissional que se dedica incansavelmente para garantir a satisfação contínua de cada cliente, sempre em busca da excelência em seus serviços.",
        oab: "351.229",
        sendToWpp: sendToWppMarcelo,
        sendToLinkedin: sendToLinkedinMarcelo,
        sendToGmail: sendToGmailMarcelo
    },
    {
        img: ArmandoImg,
        name: "Armando Nascimento",
        description: "Armando é um profissional graduado pela UNIFAFIBE (2009-2013), com mais de uma década de experiência em renomadas instituições financeiras brasileiras. Especializado em direito do consumidor e do trabalho, ele se destaca por seu talento e dedicação em proporcionar serviços de excelência aos clientes, sempre buscando superar expectativas e oferecer soluções eficazes",
        oab: "346.881",
        sendToWpp: sendToWppArmando,
        sendToLinkedin: sendToLinkedinArmando,
        sendToGmail: sendToWppArmando

    }
]
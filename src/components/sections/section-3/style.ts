import styled from "styled-components"
import BackgroundSection3 from "../../../assets/img/BackgroundSection3.webp"


const Container = styled.section`
    width: 100%;
    padding: 8rem 4rem;
    background-image: url(${BackgroundSection3});
    background-position: center;
    background-size: cover;

    h2{
        font-size: 4rem;
        font-family: ${props => props.theme.fontFamily.cinzel};
        font-weight: 600;
        color: ${props => props.theme.colors.gold};
        text-align: center;
    }

    @media screen and (max-width: 1080px){
        padding: 8rem 2.4rem;

        h2{
            font-size: 2.8rem;
        }
    }

`

const Box1 = styled.div`
    display: flex;
    justify-content: center;
    gap: 7.2rem;
    margin-top: 4rem;

    @media screen and (max-width: 1080px){
        gap: 3.2rem;
    }

    @media screen and (max-width: 800px){
        display: grid;
        grid-template-rows: auto auto; /* 2 linhas com tamanho automático */
        grid-template-columns: auto auto; /* 2 colunas com tamanho automático */
        gap: 10px; 
    }

`

const Style = {
    Container,Box1
}

export default Style
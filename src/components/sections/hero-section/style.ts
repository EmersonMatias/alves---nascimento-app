import styled from "styled-components"
import BackgroundImage from "../../../assets/img/Background.webp"

const Container = styled.section`
    width: 100%;
    height: 100vh;
    padding: 6rem 8rem 0rem 8rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5.6rem;

    @media screen and (max-width: 1080px){
        padding: 6rem 4rem 0rem 4rem;
        text-align: center;
    }

`

const Box1 = styled.div`
    h5{
        font-size: 2.4rem;
        font-weight: 300;
    }

    h1{
        font-family: ${props => props.theme.fontFamily.cinzel};
        font-size: 9.6rem;
        color: ${props => props.theme.colors.gold};
        font-weight: 600;
        margin-bottom: 0.8rem;
    }

    .fontSize{
        font-size: 12rem;
    }

    .areas{
        margin-top: 0.8rem;
    }

    @media screen and (max-width: 1080px){
        text-align: center;
    }
`

const Box2 = styled.div`
    z-index: 2;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h5{
        text-align: center;
        width: 80rem;
        font-size: 2.4rem;
        font-weight: 300;
        margin-bottom: 2.4rem;
    }

    h6{
        font-size: 1.8rem;
        font-weight: 600;
        color: ${props => props.theme.colors.gold};
        text-align: center;
    }

    .info1{
        position: absolute;
        bottom: 4rem;
        left: 8rem;
    }

    .info2{
        position: absolute;
        bottom: 4rem;
        right: 8rem;

    }
`

const Background = styled.div`
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background-image: url(${BackgroundImage});
    background-size: cover;
    position: absolute;
    background-position: top right;
    z-index: -20;

    
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 1;
    }
`
export const Bold = styled.span`
    font-weight: 700;
`


const Style = {
    Container,Box1,Box2,Background
}

export default Style
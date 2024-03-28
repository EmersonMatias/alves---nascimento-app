import styled from "styled-components"
import BackgroundImage from "../../../assets/img/Background.webp"

const Container = styled.section`
    width: 100%;
    height: 100dvh;
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

    @media screen and (max-width: 800px){
        padding: 12rem 2.4rem 8rem 2.4rem;
        gap: 2.4rem;
        height: fit-content;
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
        line-height: 1.3;
    }

    @media screen and (max-width: 1080px){
        text-align: center;
    }

    
    @media screen and (max-width: 800px){
       h1{
            font-size: 4rem;
            margin-top: 0.8rem;
            margin-bottom: 1.6rem;
       }

       .fontSize{
            font-size: 7.2rem;
       }

       h5{
            font-size: 2rem;
       }
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

      
    @media screen and (max-width: 800px){
        h5{
            font-size: 1.8rem;
            width: fit-content;
        }

        .info1{
            bottom: 1.6rem;
            left: 1.6rem;
            font-size: 1.4rem;
        }

        .info2{
            font-size: 1.4rem;
            bottom: 1.6rem;
            right: 1.6rem;
        }
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

    
    @media screen and (max-width: 800px){
      height: 100%;
    }
`
export const Bold = styled.span`
    font-weight: 700;
`


const Style = {
    Container,Box1,Box2,Background
}

export default Style
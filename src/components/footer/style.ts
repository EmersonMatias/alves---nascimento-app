import styled from "styled-components"



const Container = styled.footer`
    width: 100%;
    padding: 4rem;
    font-size: 1.4rem;
    background-color: #070707;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title{
        color: ${props => props.theme.colors.gold};
        font-weight: 600;
        margin-bottom: 1.6rem;
        text-align: center;
    }

    .copyright{
        font-weight: 600;
    }

    .social{
        display: flex;
        align-items: center;

        
        gap: 0.8rem;

        img{
            width: 2.4rem;
        }
    }

    @media screen and (max-width: 800px){
       padding: 2.4rem;
    }
`

const Box1 = styled.div`
    margin-bottom: 3.2rem;
    gap: 8rem;
    display: flex;


    .left, .right{
        width: 16rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.8rem;
    }

    .location{
        line-height: 1.4;
    }

    @media screen and (max-width: 800px){
       .left, .right{
            background-color: blue;
            width: fit-content;
       }
    }

    @media screen and (max-width: 600px){
       flex-direction: column;
       align-items: center;
       gap: 1.6rem;
    }
`

const Box2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    text-align: center;
`

const Logo = styled.img`
    width: 16rem;
`




const Style = { Container, Box1, Box2, Logo }

export default Style
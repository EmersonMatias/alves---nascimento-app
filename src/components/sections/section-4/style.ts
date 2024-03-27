import styled from "styled-components"


const Container = styled.section`
    width: 100%;
    padding: 8rem;
    display: flex;

    h2{
        font-size: 4rem;
        font-family: ${props => props.theme.fontFamily.cinzel};
        font-weight: 600;
        color: ${props => props.theme.colors.gold};
        text-align: left;
    }

    h5{
        font-size: 2.2rem;
        font-weight: 300;
        text-align: left;
        margin-top: 0.8rem;
    }

    @media screen and (max-width: 1080px){
        flex-direction: column;
    }

`

const Box1 = styled.div`
    max-width: 28rem;
    margin-right: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 1080px){
        max-width: 100%;
        background-color: gray;
        align-items: center;
        margin-bottom: 3.2rem;
    }
`

const Box2 = styled.div`
    width: 100%;
    gap: 4rem;  
    display: flex;
    justify-content: center;
`

const Style = {
    Container,Box1, Box2
}

export default Style
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

`

const Box1 = styled.div`
    display: flex;
    justify-content: center;
    gap: 7.2rem;
    margin-top: 4rem;
`

const Style = {
    Container,Box1
}

export default Style
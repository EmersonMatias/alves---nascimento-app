import styled from "styled-components"
import Background from "../../../assets/img/BackgroundSection6.webp"


const Container = styled.section`
    width: 100%;
    padding: 8rem 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    h3{
        font-size: 3.2rem;
        font-weight: 500;
        text-align: center;
        margin-bottom: 3.2rem;
    }
`






const Style = { Container }

export default Style
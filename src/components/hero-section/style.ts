import styled from "styled-components"
import Background from "../../assets/img/Background.webp"



const Container = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;


    background-image: url(${Background});
    background-size: cover;
    background-position:  right top;

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


const Style = {
    Container
}

export default Style
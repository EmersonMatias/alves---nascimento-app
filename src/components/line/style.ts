import styled from "styled-components"




const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 1.6rem;
    margin-bottom: 1.6rem;

    .rightArrow{
        width: 2.4rem;
        height: 2.4rem;
    }

    p{
        font-size: 1.6rem;
        font-weight: 600;
    }

    @media screen and (max-width: 1280px){
        margin-bottom: 1.3rem;
    }

`




const Style = {
    Container
}

export default Style
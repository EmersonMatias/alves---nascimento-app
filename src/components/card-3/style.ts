import styled from "styled-components"


const Container = styled.div`
    width: fit-content;
    max-width: 56rem;
    padding: 4rem 3.2rem;
    font-size: 1.6rem;
    border-radius: 0.8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #171717;

    h6{
        margin-top: 0.4rem;
        font-size: 1.8rem;
        font-weight: 600;
    }

    .people{
        margin-bottom: 0.8rem;
        max-width: 32rem;
        min-width: 24rem;
    }

    .socialContainer{
        display: flex;
        gap: 3.2rem;
    }

    .social{
        width: 3.2rem;
        height: 3.2rem;
        margin-bottom: 2.4rem;
    }

    .oab{
        font-weight: 600;
        margin-top: 0.8rem;
        margin-bottom: 2.4rem;
    }

    .description{
        line-height: 1.5;
        text-align: center;
    }
`





const Style = {
    Container
}

export default Style
import styled from "styled-components"

const Container = styled.button`
    background-color: ${props => props.theme.colors.green};
    color: ${props => props.theme.colors.white};
    padding: 1.6rem 2.4rem;
    font-size: 1.6rem;
    font-weight: 600;
    border-radius: 0.8rem;
    border: none;
    display: flex;
    align-items: center;
    gap: 1.6rem;
    cursor: pointer;

    img{
        width: 4rem;
        height: 4rem;
    }

    @media screen and (max-width: 800px){
       padding: 1.6rem;

       img{
            width: 3.2rem;
            height: 3.2rem;
       }
    }
`

const Style = {
    Container
}

export default Style
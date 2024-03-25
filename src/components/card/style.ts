import styled from "styled-components"


const Container = styled.div`
    max-width: 120rem;
    min-height: 40rem;
    display: flex;


    .content{
        padding: 3.2rem 2.4rem;

        h3{
            font-size: 3.2rem;
            font-family: ${props => props.theme.fontFamily.cinzel};
            font-weight: 600;
            color: ${props => props.theme.colors.gold};
        }

        h6{
            font-size: 1.6rem;
            line-height: 1.2;
            margin-top: 0.8rem;
            margin-bottom: 1.6rem;
        }
    }

    img{
        max-width: 60rem;
    }

`

const Style = {
    Container
}

export default Style
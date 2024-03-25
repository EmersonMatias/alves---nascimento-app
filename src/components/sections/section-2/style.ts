import styled from "styled-components"


const Container = styled.section`
    width: 100%;
    height: 100vh;
    padding: 12rem 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
        font-size: 4rem;
        font-family: ${props => props.theme.fontFamily.cinzel};
        font-weight: 600;
        color: ${props => props.theme.colors.gold};
        text-align: center;
    }

    h5{
        font-size: 2.2rem;
        font-weight: 300;
        text-align: center;
        margin-top: 0.8rem;
    }
`

const Box1 = styled.div`
    margin-top: 6rem;
    background-color: #262626;

    .card{
        width: 120rem;
        height: 40rem;
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
            }
        }

        img{
            width: 60rem;
            height: 40rem;
        }
    }
`




const Style = {
    Container,Box1
}

export default Style
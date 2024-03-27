import styled from "styled-components"


const Container = styled.section`
    width: 100%;
    padding: 8rem;
    background-color: #0F0F0F;

    h2{
        font-size: 4rem;
        font-family: ${props => props.theme.fontFamily.cinzel};
        font-weight: 600;
        color: ${props => props.theme.colors.gold};
    }

    h5{
        font-size: 2.2rem;
        font-weight: 300;
        text-align: left;
        margin-top: 0.8rem;
    }

`

const Box1 = styled.div`
    display: flex;
    gap: 4rem;

    .leftContent{
        width: fit-content;
    }

    .socialContainer{
        display: flex;
        justify-content: center;
        background-color: ${props => props.theme.colors.black};
        gap: 4rem;
        margin-top: 8rem;
        padding: 4rem 0rem;
        border-radius: 0.8rem;

        .socialContent{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.8rem;
            width: fit-content;
            cursor: pointer;

            h6{
                font-size: 1.6rem;
                font-weight: 600;
            }

            img{
                width: 4rem;
                height: 4rem;
            }
        }

       

    }

    .rightContent{
        width: 70%;
    } 
`

const Box2 = styled.div`
    margin-top: 8rem;
    background-color: gray;
    display: flex;
    gap: 4rem;

    .escritorio{
        width: 48rem;
    }

    .location{
        display: flex;
        align-items: center;
        gap: 1.6rem;
        margin-top: 2.4rem;

        p{
            font-size: 1.6rem;
        }
    }

    .rightContent{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        background-color: pink;
    }

`




const Style = {
    Container,Box1,Box2
}


export default Style
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

    
    @media screen and (max-width: 1080px){
        padding: 8rem 4rem;
    }

    @media screen and (max-width: 800px){
        padding: 8rem 2.4rem;


        h2{
            font-size: 2.8rem;
        }

        h5{
            font-size: 2rem;
        }
    }

`

const Box1 = styled.div`
    display: flex;
    align-items: end;
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
        padding: 4rem 2.4rem;
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
        width: 100%;
    } 


    @media screen and (max-width: 1080px){

        .socialContainer{
            gap: 2.4rem;
            flex-direction: column;
            align-items: center;
            margin-top: 4rem;
        }
    }

    @media screen and (max-width: 800px){
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`

const Box2 = styled.div`
    margin-top: 8rem;
    display: flex;
    gap: 4rem;

    .escritorio{
        width: 48rem;
    }

    .location{
        display: flex;
        align-items: center;
        gap: 1.6rem;
        margin: 2.4rem 0rem;
        text-align: center;
        line-height: 1.2;


        p{
            font-size: 1.6rem;
        }
    }

    h5{
        text-align: center;
        line-height: 1.4;
    }

    .rightContent{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .maps{
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: 1080px){
        .escritorio{
            width: 40rem;
        }
    }

    @media screen and (max-width: 800px){
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-top: 4rem;
        gap: 2.4rem;

        .maps{
            height: 40rem;
        }

        .escritorio{
            width: 100%;
        }
    }

`




const Style = {
    Container,Box1,Box2
}


export default Style
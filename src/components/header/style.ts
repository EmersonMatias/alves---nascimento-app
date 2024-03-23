import styled from "styled-components"

const Container = styled.header`
    width: 100%;
    height: 6rem;
    background-color: rgba(0,0,0,0.5);
    top: 0;
    left: 0;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 2;

    h6{
        font-size: 1.8rem;
        font-weight: 500;
    }
`

const Box1 = styled.div`
    display: flex;
    gap: 1.6rem;
`

const Box2 = styled.div`
    display: flex;
    position: absolute;
    right: 4rem;
    gap: 1.6rem;

    img{
        cursor: pointer;
    }

`
const Logo = styled.img`
    position: absolute;
    left: 4rem;

`



const Style = {
    Container,Box1,Box2,Logo
}

export default Style
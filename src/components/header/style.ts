import styled from "styled-components"

const Container = styled.header`
    width: 100%;
    height: 6rem;
    background-color: rgba(0,0,0,0.7);
    top: 0;
    left: 0;
    box-shadow: 0px 15px 35px rgba(0, 0, 0, 1);
    z-index: 2;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

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
    right: 8rem;
    gap: 1.6rem;

    img{
        cursor: pointer;
    }

`

const Logo = styled.img`
    position: absolute;
    left: 8rem;
`

const Style = {
    Container,Box1,Box2,Logo
}

export default Style
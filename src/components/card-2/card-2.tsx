import Style from "./style";

interface Card2Props {
    img: string,
    title: string,
    description: string
}

export default function Card2({description,img,title}: Card2Props){
    return(
        <Style.Container>
            <img src={img} alt={title}/>
            <h5>{title}</h5>

            <p>{description}</p>
        </Style.Container>
    )
}
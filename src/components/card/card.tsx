import Style from "./style";

interface CardProps {
    side: string
    title: string,
    description: string,
    img: string,
    alt: string
}

export default function Card({ side, alt, description, img, title }: CardProps) {

    return (
        <Style.Container>
            {side === "left" &&
                <>
                    <img src={img} alt={alt} />

                    <div className="content">
                        <h3>{title}</h3>
                        <h6>{description}</h6>

                    </div>
                </>
            }
            {side === "right" &&
                <>
                    <div className="content">
                        <h3>{title}</h3>
                        <h6>{description}</h6>

                    </div>

                    <img src={img} alt={alt} />
                </>

            }
        </Style.Container>
    )
}
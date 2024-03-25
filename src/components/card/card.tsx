import Line from "../line/line";
import Style from "./style";

interface CardProps {
    side: string
    title: string,
    description: string,
    img: string,
    alt: string,
    subareas?: string[]
}

export default function Card({ side, alt, description, img, title, subareas }: CardProps) {

    return (
        <Style.Container>
            {side === "left" &&
                <>
                    <img src={img} alt={alt} />

                    <div className="content">
                        <h3>{title}</h3>
                        <h6>{description}</h6>

                        {subareas?.map((subarea) => {
                            return <Line key={subarea} title={subarea} />
                        })}
                    </div>


                </>
            }
            {side === "right" &&
                <>
                    <div className="content">
                        <h3>{title}</h3>
                        <h6>{description}</h6>

                        {subareas?.map((subarea) => {
                            return <Line key={subarea} title={subarea} />
                        })}

                    </div>

                    <img src={img} alt={alt} />
                </>

            }
        </Style.Container>
    )
}
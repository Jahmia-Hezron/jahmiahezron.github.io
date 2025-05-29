type TechStackCardProps = {
    image: string;
    header: string;
    body: string;
}


const TechStackCard = ({image, header, body}:TechStackCardProps) => {
    return (
        <div className="TechStackCard">
            <div className='Image'>
                <img src={image} alt="Placeholder" loading='eager' decoding='async' />
            </div>
            <div className="Text">
                <div className="Header">
                    <text>{header}</text>
                </div>
                <div className="Body">
                    <text>{body}</text>
                </div>
            </div>
        </div>
    )
}

export default TechStackCard
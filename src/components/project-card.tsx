type ProjectCardProps = {
    image: string;
    header: string;
    body: string;
}

const Project_card = ({image, header, body}: ProjectCardProps) => {
    return (
        <div className="project-card">
            <div className='Image'>
                <img src={image} alt="Placeholder" />
            </div>
             <div className="Text">
                < div className="Header">
                    <text>{header}</text>
                </div>
                
                <div className="Body">
                    <text>{body}</text>
                </div>
            </div>
    </div>
    )
}

export default Project_card;
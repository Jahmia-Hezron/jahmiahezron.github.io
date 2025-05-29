import Button from "./button";

type ProjectCardProps = {
    image: string;
    header: string;
    body: string;
    onClick?: () => void;

}

const Project_card = ({image, header, body, onClick}: ProjectCardProps) => {
    return (
        <div className="project-card">
            <div className='Image'>
                <img src={image} alt="Placeholder" loading='eager' decoding='async' />
            </div>
             <div className="Text">
                < div className="Header">
                    <text>{header}</text>
                </div>
                
                <div className="Body">
                    <text>{body}</text>
                </div>
                <Button 
                    onClick={onClick}
                    name="ViewMyWork"
                    label='View'
                />
            </div>
    </div>
    )
}

export default Project_card;
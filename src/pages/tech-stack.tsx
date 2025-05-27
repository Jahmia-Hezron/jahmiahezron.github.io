import TechStackCard from "../components/tech-stack-card";

const Tech_stack = () => {
    return (
        <div className="TechStackPage">
            <div className="Content">
                <div className="Text">
                    <div className="Title">
                        <text>MY TOOLBOX</text>
                    </div>
                    <div className="Body">
                        <text>These are the tools I use to bring ideas to life — from building full-stack apps to deploying and maintaining them.</text>
                    </div>
                </div>
                <TechStackCard
                    image="/images/tech-stack/react.png"
                    header="React TS/JS"
                    body="Web Development"
                />
                 <TechStackCard
                    image="/images/tech-stack/react.png"
                    header="HTML"
                    body="Web Development"
                />
                 <TechStackCard
                    image="/images/tech-stack/react.png"
                    header="CSS/SCSS"
                    body="Web Development"
                />
                 <TechStackCard
                    image="/images/tech-stack/react.png"
                    header="Tailwind"
                    body="Web Development"
                />
                 <TechStackCard
                    image="/images/tech-stack/react.png"
                    header="Flutter"
                    body="Front-end Development"
                />
                 <TechStackCard
                    image="/images/tech-stack/react.png"
                    header="Golang"
                    body="Back-end Development"
                />
                 <TechStackCard
                    image="/images/tech-stack/react.png"
                    header="Python"
                    body="Back-end Development"
                />
                 <TechStackCard
                    image="/images/tech-stack/react.png"
                    header="Node js"
                    body="Back-end Development"
                />
                 <TechStackCard
                    image="/images/tech-stack/react.png"
                    header="Postman"
                    body="Data Testing"
                />
                <TechStackCard
                    image="/images/tech-stack/react.png"
                    header="PostgresSQL"
                    body="Data Storange & Auth"
                />
                <TechStackCard
                    image="/images/tech-stack/react.png"
                    header="MySQL"
                    body="Data Storange & Auth"
                />
                <TechStackCard
                    image="/images/tech-stack/react.png"
                    header="Docker"
                    body="Dev Opps"
                />
                 <TechStackCard
                    image="/images/tech-stack/react.png"
                    header="Github Actions"
                    body="Dev Opps"
                />
                 <TechStackCard
                    image="/images/tech-stack/react.png"
                    header="Git"
                    body="Version Control"
                />
                <TechStackCard
                    image="/images/tech-stack/react.png"
                    header="3DS Max"
                    body="Design"
                />
                 <TechStackCard
                    image="/images/tech-stack/react.png"
                    header="Figma"
                    body="Design"
                />
                 <TechStackCard
                    image="/images/tech-stack/react.png"
                    header="Adobe XD"
                    body="Design"
                />
                <TechStackCard
                    image="/images/tech-stack/react.png"
                    header="Adobe CC"
                    body="Design"
                />
            </div>
        </div>
    );
    }

export default Tech_stack;
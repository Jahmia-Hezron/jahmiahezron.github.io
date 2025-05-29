import TechStackCard from "../components/tech-stack-card";
import react from "../assets/icons/React.png"
import html from "../assets/icons/HTML5.png"
import css from "../assets/icons/CSS3.png"
import js from "../assets/icons/JavaScript.png"
import ts from "../assets/icons/TypeScript.png"
import tailwind from "../assets/icons/Tailwind CSS.png"
import flutter from "../assets/icons/Flutter.png"
import dart from "../assets/icons/Dart.png"
import android from "../assets/icons/Android.png"
import golang from "../assets/icons/Go.png"
import python from "../assets/icons/Python.png"
import nodejs from "../assets/icons/Node.js.png"
import postman from "../assets/icons/Postman.png"
import postgress from "../assets/icons/PostgresSQL.png"
import mysql from "../assets/icons/MySQL.png"
import docker from "../assets/icons/Docker.png"
import gitactions from "../assets/icons/GitHub Actions.png"
import git from "../assets/icons/Git.png"
import figma from "../assets/icons/Figma.png"
import adobecc from "../assets/icons/62a36ba86209494ec2b1706c.png"
import adobexd from "../assets/icons/Adobe XD.png"


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
                    image={react}
                    header="React"
                    body="Web Development"
                />
                 <TechStackCard
                    image={html}
                    header="HTML"
                    body="Web Development"
                />
                 <TechStackCard
                    image={css}
                    header="CSS/SCSS"
                    body="Web Development"
                />
                <TechStackCard
                    image={js}
                    header="JavaScript"
                    body="Web Development"
                />
                <TechStackCard
                    image={ts}
                    header="TypScript"
                    body="Web Development"
                />
                 <TechStackCard
                    image={tailwind}
                    header="Tailwind"
                    body="Web Development"
                />
                 <TechStackCard
                    image={flutter}
                    header="Flutter"
                    body="Front-end Development"
                />
                 <TechStackCard
                    image={dart}
                    header="Dart"
                    body="Front-end Development"
                />
                 <TechStackCard
                    image={android}
                    header="Android"
                    body="Front-end Development"
                />
                 <TechStackCard
                    image={golang}
                    header="Golang"
                    body="Back-end Development"
                />
                 <TechStackCard
                    image={python}
                    header="Python"
                    body="Back-end Development"
                />
                 <TechStackCard
                    image={nodejs}
                    header="Node js"
                    body="Back-end Development"
                />
                 <TechStackCard
                    image={postman}
                    header="Postman"
                    body="Data Testing"
                />
                <TechStackCard
                    image={postgress}
                    header="PostgresSQL"
                    body="Data Storange & Auth"
                />
                <TechStackCard
                    image={mysql}
                    header="MySQL"
                    body="Data Storange & Auth"
                />
                <TechStackCard
                    image={docker}
                    header="Docker"
                    body="Dev Opps"
                />
                 <TechStackCard
                    image={gitactions}
                    header="Github Actions"
                    body="Dev Opps"
                />
                 <TechStackCard
                    image={git}
                    header="Git"
                    body="Version Control"
                />

                 <TechStackCard
                    image={figma}
                    header="Figma"
                    body="Design"
                />
                 <TechStackCard
                    image={adobexd}
                    header="Adobe XD"
                    body="Design"
                />
                <TechStackCard
                    image={adobecc}
                    header="Adobe CC"
                    body="Design"
                />
            </div>
        </div>
    );
    }

export default Tech_stack;
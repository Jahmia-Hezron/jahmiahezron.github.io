
import IconButton from "../components/icon-button";
import github from "../assets/icons/GitHub.png";
import whatsapp from "../assets/icons/whatsapp.png";
import gmail from "../assets/icons/gmail.png";
import { JSX } from "react";


const Contact = () => {
    return (
        <div className="ContactPage">
            <div className="Content">
               <div className="Text">
                    <div className="Title">
                        <text>LET'S CONNECT</text>
                    </div>
                    <div className="Body">
                        <text>Whether it’s a project, a collaboration, or just tech talk over coffee — I’d love to hear from you.</text>
                    </div>
                    < div className="Links">
                        <IconButton
                            icon={gmail}
                            link="mailto:hezron.p.jahmia@gmail.com"
                            ariaLabel="Email"
                        />
                         <IconButton
                            icon={github}
                            link="https://github.com/Jahmia-Hezron"
                            ariaLabel="GitHub"
                        />
                        <IconButton
                            icon={whatsapp}
                            link="https://wa.me/256752580722"
                            ariaLabel="WhatsApp"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
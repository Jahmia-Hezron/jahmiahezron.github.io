
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import IconButton from "../components/icon-button";
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
                            icon={FaGithub({ size: 65 }) as JSX.Element}
                            link="https://github.com/Jahmia-Hezron"
                            ariaLabel="GitHub"
                        />

                        <IconButton
                            icon={FaLinkedin({ size: 65 }) as JSX.Element}
                            link="https://linkedin.com/in/yourprofile"
                            ariaLabel="LinkedIn"
                        />
                        <IconButton
                            icon={FaEnvelope({ size: 65 }) as JSX.Element}
                            link="mailto:hezron.p.jahmia@gmai.com"
                            ariaLabel="Email"
                        />
                        <IconButton
                            icon={FaWhatsapp({ size: 65 }) as JSX.Element}
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
import Project_card from "../components/project-card";

const Projects = () => {
    return (
        <div className="ProjectsPage">
            <div className="Content">
                <div className="Text">
                    <div className="Title">
                        <text>SOME OF MY WORKS</text>
                    </div>
                </div>
                <Project_card 
                    image="https://via.placeholder.com/150"
                    header="Depression Diagnosis System (DDS)"
                    body="This system was designed and developed to assist psychiatrists at Butabika National Referral Hospital in diagnosing depression more accurately during clinical consultations. Built using Flutter for the front-end and Golang for the back-end, the DDS combines clinical assessment logic with a user-friendly interface. The application supports data-driven evaluations, making it a powerful digital tool for mental health professionals working in resource-constrained settings."
                />
                 <Project_card 
                    image="https://via.placeholder.com/150"
                    header="Personal Finance Tracker App"
                    body="A lightweight, offline-first finance tracking app built entirely with Flutter and Hive (NoSQL local storage). Designed for users who want to manage daily income and expenses without connecting to the internet, the app features budget categorization, simple reporting, and persistent data storage across sessions. It emphasizes speed, simplicity, and user control over financial data."
                />
                 <Project_card 
                    image="https://via.placeholder.com/150"
                    header="BM Publications"
                    body="This site was crafted for a creative agency committed to helping talent, culture, and brands find their voice through storytelling and strategic recognition. I built it to reflect BM Publications’ bold, uplifting tone — and to support their mission of connecting creatives to meaningful opportunities. It was rewarding to translate their narrative-driven vision into a clean, confident digital presence."
                />
                 <Project_card 
                    image="https://via.placeholder.com/150"
                    header="Muhumuza Brian"
                    body="This personal brand site was built for a dynamic publicist with a heart for humanitarian work. From BM Publications to Kyarimpa Cares, Brian’s vision spans creativity, impact, and purpose — and I wanted the site to reflect that intersection. With clean sections for storytelling, work, and causes, the result is a smooth, confident online identity that can grow as his influence expands."
                />
                <Project_card 
                    image="https://via.placeholder.com/150"
                    header="LAYI NGO"
                    body="Working with Lumala Abdu Youth Impact (LAYI) was a chance to help amplify a powerful grassroots mission. LAYI is a youth-led nonprofit transforming communities through sports, mentorship, and advocacy. I focused on building a platform that feels hopeful, accessible, and action-driven — one that reflects their impact and gives supporters an easy way to engage."
                />
                <Project_card 
                    image="https://via.placeholder.com/150"
                    header="Cozy Interiors UG"
                    body="This e-commerce-style site showcases Cozy Interiors’ beautifully crafted bed and bath essentials. From the soft color palette to the clean product displays, every design choice was intentional — aimed at making users feel relaxed, inspired, and a little pampered. I especially enjoyed blending performance optimization with visual comfort here."
                />
                <Project_card 
                    image="https://via.placeholder.com/150"
                    header="Lila Haven"
                    body="Lila Haven is all about mindful creativity and entrepreneurship, and I wanted the website to feel just as grounded and open-minded as the brand itself. The site was designed to support introspection and productivity — with a layout that’s simple, intentional, and free of digital clutter. It reflects a kind of peaceful energy I really enjoyed building around."
                />
            </div>
        </div>
    );
    }

export default Projects;
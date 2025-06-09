const Experience = () => {
    return (
        <div className="ExperiencePage">
            <div className="Content">
                <div className="Text">
                    {[
                        {
                            title: 'Frontend Developer: Ishop Corporation Ltd – May 2025 to Present',
                            content:
                                "I am currently contracted at Ishop Corporation Ltd as a frontend developer, contributing to the development of a scalable e-commerce platform tailored to Ugandan businesses. From the outset, the team recognized that building a meaningful solution required a strong understanding of local business challenges, and I’ve been actively involved in designing intuitive user interfaces that respond to those needs. This role is sharpening my frontend development skills and giving me valuable experience in a collaborative, product-focused engineering environment.",
                        },
                        {
                            title: "Web Developer: BM Publications – August 2024 to Present",
                            content:
                                "Since August 2024, I have worked as a contract developer with BM Publications under the leadership of Muhumuza Brian. My role involves building and customizing websites for their clients using WordPress. I handle everything from theme customization and plugin integration to deployment and post-launch support. The contract-based nature of this work has honed my ability to deliver high-quality solutions quickly, while maintaining clear communication and flexibility with clients.",
                        },
                        {
                            title: "Full stack Developer: Zaantu Software Consultancy – 2024 to 2025",
                            content:
                                "I joined Zaantu Software Consultancy as a frontend developer but quickly transitioned to full-stack developer, then software engineer, and eventually CTO. As CTO, I led the engineering team, managed task assignments, ensured project deadlines were met, and collaborated closely with stakeholders on product decisions. I played a major role in designing and deploying several production systems, and this position significantly advanced my skills in Golang, system architecture, and leadership within Agile environments.",
                        },
                        {
                            title: "Flutter Bootcamp Intern: Innovation Hub, Ntinda – May–June 2023",
                            content:
                                "In mid-2023, I attended a two-month Flutter Bootcamp at the Innovation Hub in Ntinda. This experience gave me strong hands-on training in Flutter and Dart, laying the groundwork for my mobile development skills. I learned the essentials of building cross-platform applications, working with Firebase, managing app state, and following clean architecture principles.",
                        },
                        {
                            title: "IT & Computer Science Teacher: Harvest International Christian School – 2020 to 2022",
                            content:
                                "From 2020 to 2022, I worked as an IT and Computer Science teacher at Harvest International Christian School. In addition to teaching, I was responsible for managing the school’s print server and providing technical support across departments. I worked closely with the IT Administrator to keep the school’s IT infrastructure running smoothly. Though my role ended due to administrative downsizing, I took pride in my work and the positive impact I had on students and staff alike.",
                        },

                    ].map((section, index) => (
                        <div key={index}>
                            <div className="Header">{section.title}</div>
                            <div className="Blockquote">
                                <div className="Spine"></div>
                                <div className="Body">
                                    {section.content.split('\n').map((line, i) => (
                                        <p key={i}>{line}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience;
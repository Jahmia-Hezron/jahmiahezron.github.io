const Experience = () => {
    return (
        <div className="ExperiencePage">
          <div className="Content">
                <div className="Text">
                {[
                    {
                    title: '2025: Software Developer Intern - Humuza Digital & Media',
                    content:
                        'During my internship, I worked with a team delivering both media and tech projects. I contributed to web development tasks, managed content for WordPress sites, and participated in brand-driven tech strategy sessions. It gave me hands-on experience balancing design with business goals — and a better understanding of cross-functional teamwork.',
                    },
                    {
                    title: '2023 - 2025: Software Engineer, Zaantu Software Consultancy',
                    content:
                        'At Zaantu, I worked as a backend-focused software engineer, helping design and build scalable systems from the ground up. I contributed to microservice development using Golang, implemented JWT-based authentication for secure access control, and managed database logic using GORM. I also containerized services using Docker and deployed them in a Kubernetes environment. Working in an Agile team, I learned how to deliver value in sprints, write clean, testable code, and collaborate across functions to launch real-world solutions.',
                    },
                    {
                    title: '2022 - Present: Freelance Web & App Developer',
                    content:
                        'I’ve collaborated with NGOs, interior brands, and creatives to design and build user-first websites using WordPress, HTML/CSS, and lightweight JavaScript solutions. Highlights include websites for BM Publications, LAYI, and Cozy Interiors, where I handled both technical implementation and content coordination. Each project deepened my empathy for real-world clients and their audiences.',
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
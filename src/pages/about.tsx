import React from 'react';

const About = () => {
  return (
    <div className="AboutPage">
      <div className="Content">
        <div className="Image">
          <img src="https://via.placeholder.com/150" alt="Placeholder" />
        </div>

        <div className="Text">
          {[
            {
              title: 'About Me',
              content:
                'I’m Jahmia Hezron, a software engineer based in Kampala, Uganda. I specialize in building full-stack applications and digital systems that solve real problems — from mental health tools to scalable web platforms.',
            },
            {
              title: 'My Journey',
              content:
                'My journey into tech started with a passion for logic and design. I began exploring programming through web development and gradually expanded into mobile, backend systems, and DevOps. Over the years, I’ve worked with tools like Golang, Flutter, React, and Docker, building projects that range from personal apps to academic research systems like the Digital Depression Diagnosis System (DDS) for Butabika Hospital.',
            },
            {
              title: 'What I Believe In',
              content:
                'I believe in writing clean, efficient code that solves real-world problems. I’m a big fan of learning by building, collaborating with passionate people, and creating tools that have meaningful impact. Whether I’m designing a user-friendly interface or setting up CI/CD pipelines, I approach my work with care, curiosity, and purpose.',
            },
            {
              title: 'Fun Facts',
              content:
                'I love combining tech and creativity — from coding to 3D modeling.\nI\'m currently diving into 3D design with Autodesk 3ds Max + Arnold.\nCoffee + code = 🔥\nI enjoy mentoring and sharing what I learn along the way.',
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
};

export default About;

import me from '../assets/images/me.png';
import SEO from '../scripts/seo';
const About = () => {
  return (
    <>
      <SEO
        title="About Jahmia Hezron | Fullstack Developer"
        description="Learn about Jahmia Hezron's background, skills, and experience as a fullstack developer."
      />
      <h1>About Me</h1>
      <div className="AboutPage">
        <div className="Content">
          <div className="Image">
            <img src={me} alt="Placeholder" loading='eager' decoding='async' />
          </div>

          <div className="Text">
            {[
              {
                title: 'About Me',
                content:
                  'I’m Jahmia Hezron, a software engineer and IT professional based in Kampala, Uganda. I specialize in building full-stack applications and digital systems that solve real problems — from intuitive user interfaces to scalable backend infrastructure. With a background in both teaching and systems administration, I bring a practical, people-centered approach to everything I build.',
              },
              {
                title: 'My Journey',
                content:
                  'My journey into tech started with a passion for logic, structure, and creativity. I began with web development, then expanded into mobile apps, backend systems, and DevOps. Over time, I’ve worked with tools like Golang, Flutter, React, Docker, and Kubernetes — developing everything from client websites to internal business platforms and tools.',
              },
              {
                title: 'What I Believe In',
                content:
                  'I believe in writing clean, maintainable code that delivers real-world value. I’m driven by meaningful work — the kind that improves lives, systems, or experiences. I enjoy building with intention, mentoring others, and collaborating with thoughtful teams. Whether I’m crafting UIs, managing teams, or configuring CI/CD workflows, I approach it all with care, curiosity, and quiet discipline.',
              },
              {
                title: 'Fun Facts',
                content:
                  '💻 I love blending tech and creativity — from code to 3D modeling.\n🧠 I’m currently learning 3D design with Autodesk 3ds Max + Arnold.\n☕ Coffee + code = my ideal day.\n🔷 I’m an INFJ — thoughtful, curious, and purpose-driven.\n🛠️ I enjoy mentoring and sharing what I learn through real-world projects.',
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
    </>
  );
};

export default About;

import { useNavigate } from 'react-router-dom';
import cover from '../assets/images/headshot.png';
import Button from '../components/button';

const Home = () => {
  const navigate = useNavigate();

  const goToProjectsPage = () => {
    navigate('/projects');
  };
  const goToMail = () => {
    window.location.href = "mailto:hezron.p.jahmia@gmail.com";
  };
  // const goToWhatsApp = () => {
  //   window.location.href = "https://wa.me/256752580722";
  // };

  return (
    <div className='HomePage'>
      <div className='Content'>
        <div className="Text">
          < div className="Header">
            <text>Hi, I’m Jahmia Hezron!</text>
          </div>
          <div className="Title">
            <text>SOFTWARE ENGINEER</text>
          </div>
          <div className="Body">
            <text>I design and build fast, scalable, and user-friendly software using tools like<b> Golang, Flutter, and React.</b> Whether it's a web app, mobile solution, or DevOps setup, I love solving real-world problems through clean code.</text>
          </div>
          <div className='CtaButtons'>
            <Button name='ViewMyWork' label='View My Work' onClick={goToProjectsPage} />
            <Button label='Get In Touch' onClick={goToMail} />
            {/* <Button label='Get In Touch' onClick={goToWhatsApp} /> */}
          </div>
        </div>
        <div className='Image'>
          <img src={cover} alt="Placeholder" loading='eager' decoding='async' />
        </div>
      </div>
    </div>
  );
}

export default Home;

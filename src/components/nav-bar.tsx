import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Button from './button';
import IconButton from './icon-button';
import github from "../assets/icons/GitHub.png";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const links = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/tech-stack', label: 'Tech Stack' },
  { path: '/experience', label: 'Experience' },
];

const NavBar = () => {
  const location = useLocation();
  const navRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [indicatorProps, setIndicatorProps] = useState({ left: 0, width: 0 });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const index = links.findIndex((link) => link.path === location.pathname);
    const el = navRefs.current[index];
    if (el) {
      setIndicatorProps({
        left: el.offsetLeft,
        width: el.offsetWidth,
      });
    }
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <div className="mobile-toggle">
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="hamburger"
          aria-label="Toggle menu"
        >
          <DotLottieReact
            src="https://lottie.host/3710a018-746c-41b4-8483-dcf6349878cf/ANQJgYOFeu.lottie"
            loop
            autoplay
            className="lottieIcon"
          />
        </button>
      </div>

      <div className={`navbar-content ${menuOpen ? 'open' : ''}`}>
        <div className="navbar-start">
          <ul className="navbar-items" style={{ position: 'relative' }}>
            {links.map(({ path, label }, index) => (
              <li
                key={path}
                ref={(el) => { navRefs.current[index] = el; }}
                className="nav-item"
              >
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? 'active-link' : '')}
                >
                  {label}
                </NavLink>
              </li>
            ))}

            <motion.div
              className="nav-indicator"
              layout
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              style={{
                position: 'absolute',
                bottom: 0,
                height: '0.2rem',
                backgroundColor: '#00D4FF',
                borderRadius: '0.2rem',
                left: indicatorProps.left,
                width: indicatorProps.width,
              }}
            />
          </ul>
        </div>

        <div className="navbar-end">
          <IconButton
            icon={github}
            link="https://github.com/Jahmia-Hezron"
            ariaLabel="GitHub"
          />
          <Button
            label="RESUME"
            name="DownloadResume"
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/jahmia-hezron-resume.pdf';
              link.download = 'jahmia-hezron-resume.pdf';
              link.click();
            }}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

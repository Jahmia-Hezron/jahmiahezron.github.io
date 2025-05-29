import { NavLink, useLocation } from 'react-router-dom';
import Button from './button';

const Nav_bar = () => {
  const location = useLocation();

  const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/tech-stack', label: 'Tech Stack' },
    { path: '/experience', label: 'Experience' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-start">
        <ul className="navbar-items p-0">
          {links.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
       <a href='/jahmia Heron - resume.pdf' download> <Button label='RESUME' /></a>
      </div>
    </nav>
  );
};

export default Nav_bar;

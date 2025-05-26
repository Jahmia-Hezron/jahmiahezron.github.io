import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import './styles/pages.scss'
import './styles/components.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav_bar from './components/nav-bar';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Tech_stack from './pages/tech-stack';
import Experience from './pages/experience';
import Contact from './pages/contact';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Nav_bar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/tech-stack" element={<Tech_stack />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import './styles/index.scss';
import './styles/pages.scss';
import './styles/components.scss';

import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import TechStack from './pages/tech-stack';
import Experience from './pages/experience';

import MainLayout from './main-layout';
import reportWebVitals from './reportWebVitals';
import { NavigationProvider } from './scripts/navigation-context';

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tech-stack" element={<TechStack />} />
          <Route path="/experience" element={<Experience />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <NavigationProvider>
      <App />
    </NavigationProvider>
  </BrowserRouter>
);

reportWebVitals();

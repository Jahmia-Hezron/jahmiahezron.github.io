import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const routeOrder = ['/', '/about', '/projects', '/tech-stack', '/experience', '/contact'];

type Direction = 'forward' | 'backward';

const NavigationContext = createContext<Direction>('forward');

export const useNavigationDirection = () => useContext(NavigationContext);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const prevPathRef = useRef(location.pathname);
  const [direction, setDirection] = useState<Direction>('forward');

  useEffect(() => {
    const currentPath = location.pathname;
    const prevPath = prevPathRef.current;

    const currentIndex = routeOrder.indexOf(currentPath);
    const prevIndex = routeOrder.indexOf(prevPath);

    if (currentIndex !== -1 && prevIndex !== -1) {
      setDirection(currentIndex > prevIndex ? 'forward' : 'backward');
    }

    prevPathRef.current = currentPath;
  }, [location.pathname]);

  return (
    <NavigationContext.Provider value={direction}>
      {children}
    </NavigationContext.Provider>
  );
};

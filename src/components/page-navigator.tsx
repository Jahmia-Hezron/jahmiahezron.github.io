
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/components.scss';

type PageNavigatorProps = {
  routes: string[];
};

const PageNavigator: React.FC<PageNavigatorProps> = ({ routes }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentIndex = routes.indexOf(location.pathname);
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < routes.length - 1;

  return (
    <>
      {hasPrev && (
        <button
          className="NavSideButton left"
          onClick={() => navigate(routes[currentIndex - 1])}
        >
          ←
        </button>
      )}
      {hasNext && (
        <button
          className="NavSideButton right"
          onClick={() => navigate(routes[currentIndex + 1])}
        >
          →
        </button>
      )}
    </>
  );
};

export default PageNavigator;

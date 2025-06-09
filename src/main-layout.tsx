import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigationDirection } from './scripts/navigation-context';

import NavBar from './components/nav-bar';
import PageNavigator from './components/page-navigator';

const routeOrder = ['/', '/about', '/projects', '/tech-stack', '/experience'];

const MainLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const direction = useNavigationDirection();

  const variants = {
    initial: (dir: string) => ({
      x: dir === 'forward' ? 500 : -500,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
    exit: (dir: string) => ({
      x: dir === 'forward' ? -500 : 500,
      opacity: 0,
      transition: { duration: 0.5, ease: 'easeInOut' },
    }),
  };

  const handleSwipe = (offsetX: number) => {
    const threshold = 100;
    const currentIndex = routeOrder.indexOf(location.pathname);

    if (offsetX < -threshold && currentIndex < routeOrder.length - 1) {
      navigate(routeOrder[currentIndex + 1]);
    } else if (offsetX > threshold && currentIndex > 0) {
      navigate(routeOrder[currentIndex - 1]);
    }
  };

  return (
    <>
      <NavBar />

      <div className="BodyContainer" style={{ perspective: 1200, touchAction: 'pan-y' }}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={location.pathname}
            custom={direction}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(_, info) => handleSwipe(info.offset.x)}
            style={{
              transformOrigin: 'center',
              willChange: 'transform, opacity',
            }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </div>

      {routeOrder.includes(location.pathname) && (
        <PageNavigator routes={routeOrder} />
      )}

      <div className="Footer">
        <p>© 2024 Jahmia Hezron. All rights reserved.</p>
      </div>
    </>
  );
};

export default MainLayout;

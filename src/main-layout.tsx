import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Nav_bar from './components/nav-bar';
import PageNavigator from './components/page-navigator';
import { useNavigationDirection } from './scripts/navigation-context';

const routeOrder = ['/', '/about', '/projects', '/tech-stack', '/experience', '/contact'];



const MainLayout = () => {
  const location = useLocation();
  const direction = useNavigationDirection();

  const variants = {
    initial: (dir: string) => ({
      x: dir === 'forward' ? 500 : -500,
      opacity: 0,
    }),
    animate: { x: 0, opacity: 1 },
    exit: (dir: string) => ({
      x: dir === 'forward' ? -500 : 500,
      opacity: 0,
    }),
  };

  return (
    <>
      <Nav_bar />
      <div style={{ perspective: 1200, overflowX: 'hidden' }}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={location.pathname}
            custom={direction}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, ease: 'easeInOut' }}
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
    </>
  );
};


export default MainLayout;

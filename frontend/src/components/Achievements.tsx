import React, { useEffect, useState } from 'react';
import { useCookies } from '../context/CookieContext';
import { CSSTransition } from 'react-transition-group';
import '../styles/Achievements.css';

const Achievements: React.FC = () => {
  const { cookies } = useCookies();
  const [visibleAchievement, setVisibleAchievement] = useState<string | null>(null);

  useEffect(() => {
    if (cookies % 100 === 0 && cookies !== 0) {
      setVisibleAchievement(`${cookies} Cookies ✅!`);
      const timeout = setTimeout(() => {
        setVisibleAchievement(null);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [cookies]);

  return (
    <div className="fixed bottom-0 right-0 m-4 space-y-2">
      <CSSTransition
        in={!!visibleAchievement}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <div className="achievement-notification">
          {visibleAchievement}
        </div>
      </CSSTransition>
    </div>
  );
};

export default Achievements;

// import React, { createContext, useContext, useState, ReactNode } from 'react';

// interface AchievementsContextType {
//   achievedCookies: number;
//   setAchievedCookies: (cookies: number) => void;
// }

// const AchievementsContext = createContext<AchievementsContextType | undefined>(undefined);

// export const useAchievements = () => {
//   const context = useContext(AchievementsContext);
//   if (!context) {
//     throw new Error('useAchievements must be used within an AchievementsProvider');
//   }
//   return context;
// };

// export const AchievementsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [achievedCookies, setAchievedCookies] = useState<number>(0);

//   return (
//     <AchievementsContext.Provider value={{ achievedCookies, setAchievedCookies }}>
//       {children}
//     </AchievementsContext.Provider>
//   );
// };

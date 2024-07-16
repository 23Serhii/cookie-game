import React from "react";
import { CookieProvider } from "./context/CookieContext";
import CookieButton from "./components/CookieButton";
import CookieCounter from "./components/CookieCounter";
import Level from "./components/Level";
import UpgradeButton from "./components/UpgradeButton";
import Achievements from "./components/Achievements";
import ProgressBar from "./components/ProgressBar";
import ResetButton from "./components/ResetButton";
import EnergyBar from './components/EnergyBar'
import UsernameInput from './components/UsernameInput';
import { useCookies } from './context/CookieContext';;
import Shop from './components/Shop';
import "./styles/App.css";

const App: React.FC = () => {
  return (
    <CookieProvider>
      <div className="app-container">
        <div className="level-container">
          <Level />
        </div>
        <CookieCounter />
        <div className="main-controls">
          <EnergyBar />
          <div className="button-container">
            <CookieButton />
          </div>
        </div>
        <ProgressBar />
        <div className="button-container">
          <UpgradeButton />
          <ResetButton />
        </div>
        <div className="achievements-container">
          <Achievements />
        </div>
        {/* <div className="shop-container">
          <Shop />
        </div>
        <div className="inventory-container">
          <Inventory />
        </div> */}
      </div>
    </CookieProvider>
  );
};

export default App;

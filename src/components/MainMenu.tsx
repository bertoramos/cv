import React from 'react';
import './MainMenu.css';

import { addClass, removeClass, hasClass } from '../utils/refsUtils';

const MainMenu: React.FC = () => {

  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMainMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
      <div onClick={toggleMainMenu} className="button-container">
        <div className={isOpen ? "close-menu-button" : "open-menu-button"} />
      </div>
      <div id="main-menu" className={isOpen ? "menu-active" : "menu-inactive"}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Services</li>
        </ul>
      </div>
    </>
  );
};

export default MainMenu;

import React from 'react';
import './MainMenu.css';

import { addClass, removeClass, hasClass } from '../utils/refsUtils';
import { Link } from 'react-router-dom';

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
          <li>
            <a href="/cv/#/" onClick={toggleMainMenu}>Home</a>
          </li>
          <li>
            <a href="/cv/#/about" onClick={toggleMainMenu}>About</a>
          </li>
          <li>
            <a href="/cv/#/dashboard" onClick={toggleMainMenu}>Dashboard</a>
          </li>
          <li>
            <a href="/cv/#/snap-scroll-example" onClick={toggleMainMenu}>Snap Scroll Example</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MainMenu;

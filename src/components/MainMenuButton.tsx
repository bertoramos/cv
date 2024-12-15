import React from 'react';
import './MainMenuButton.css';

import { addClass, removeClass, hasClass } from '../utils/refsUtils';
import { Link } from 'react-router-dom';

const MainMenuButton: React.FC<{ toggleMainMenu: () => void; isOpen: boolean }> = ({ toggleMainMenu, isOpen }) => {

  return (
    <>
      <div onClick={toggleMainMenu} className="button-container">
        <div className={isOpen ? "close-menu-button" : "open-menu-button"} />
      </div>
    </>
  );
};

export default MainMenuButton;

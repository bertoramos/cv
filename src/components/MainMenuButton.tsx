import React from 'react';
import './MainMenuButton.css';
import { IonIcon } from '@ionic/react';
import { logoIonic } from 'ionicons/icons';

const MainMenuButton: React.FC<{ toggleMainMenu: () => void; isOpen: boolean }> = ({ toggleMainMenu, isOpen }) => {

  return (
    <>
      <a id="main_logo" href="/cv/#/">
        <IonIcon icon={logoIonic} color="primary"></IonIcon>
      </a>
      
      <div onClick={toggleMainMenu} className="button-container">
        <div className={isOpen ? "close-menu-button" : "open-menu-button"} />
      </div>
    </>
  );
};

export default MainMenuButton;

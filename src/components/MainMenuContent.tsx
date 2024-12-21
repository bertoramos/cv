import React from 'react';

import "./MainMenuContent.css";
import { TextReveal } from './TextReveal';
import { a } from 'react-router-dom';
import { toggle } from 'ionicons/icons';

const MainMenuContent: React.FC<{ toggleMainMenu: () => void; isOpen: boolean }> = ({ toggleMainMenu, isOpen }) => {
    return (
        <div id="main-menu" className={isOpen ? "menu-active" : "menu-inactive"}>
            <ul className="link-container">
                <li className="text-container">
                    <a className="text" href="/cv/#/" onClick={toggleMainMenu}>
                        <span>Home</span>
                    </a>
                </li>
                <li className="text-container">
                    <a className="text" href="/cv/#/about" onClick={toggleMainMenu}>
                        <span>About</span>
                    </a>
                </li>
                <li className="text-container">
                    <a className="text" href="/cv/#/experience" onClick={toggleMainMenu}>
                        <span>Experience</span>
                    </a>
                </li>
                <li className="text-container">
                    <a className="text" href="/cv/#/projects" onClick={toggleMainMenu}>
                        <span>Projects</span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default MainMenuContent;

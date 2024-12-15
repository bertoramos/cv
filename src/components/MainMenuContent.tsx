import React from 'react';

import "./MainMenuContent.css";

const MainMenuContent: React.FC<{ toggleMainMenu: () => void; isOpen: boolean }> = ({ toggleMainMenu, isOpen }) => {
    return (
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
    );
};

export default MainMenuContent;

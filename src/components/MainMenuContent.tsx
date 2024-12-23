import React from 'react';

import "./MainMenuContent.css";

const MainMenuContent: React.FC<{ toggleMainMenu: () => void; isOpen: boolean }> = ({ toggleMainMenu, isOpen }) => {
    return (
        <div id="main-menu" className={isOpen ? "menu-active" : "menu-inactive"}>
            <ul className="link-container">
                <li className="text-container">
                    <a className="text" href="/cv/#/" onClick={toggleMainMenu}>
                        <span className="menu-num">01</span><span className="menu-item">Home</span>
                    </a>
                </li>
                <li className="text-container">
                    <a className="text" href="/cv/#/about" onClick={toggleMainMenu}>
                        <span className="menu-num">02</span><span className="menu-item">About</span>
                    </a>
                </li>
                <li className="text-container">
                    <a className="text" href="/cv/#/experience" onClick={toggleMainMenu}>
                        <span className="menu-num">03</span><span className="menu-item">Experience</span>
                    </a>
                </li>
                <li className="text-container">
                    <a className="text" href="/cv/#/projects" onClick={toggleMainMenu}>
                        <span className="menu-num">04</span><span className="menu-item">Projects</span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default MainMenuContent;

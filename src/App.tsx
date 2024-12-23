import { HashRouter, Link, Route, Switch } from 'react-router-dom';
import { IonApp, IonContent, IonRouterOutlet, setupIonicReact } from '@ionic/react';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import Template from './components/Template';
import SnapScrollExample from './pages/SnapScrollExample';
import MainMenuButton from './components/MainMenuButton';
import MainMenuContent from './components/MainMenuContent';
import React from 'react';

import Home  from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';

import './App.css';
import Education from './pages/Education';


setupIonicReact();

const App: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMainMenu = () => {
    setIsOpen(!isOpen);
  };

  return (

    <IonApp>
      <MainMenuButton isOpen={isOpen} toggleMainMenu={toggleMainMenu} />
      <MainMenuContent isOpen={isOpen} toggleMainMenu={() => setIsOpen(!isOpen)} />

      <HashRouter>
        <Route path="/">
          <Template title="Home" content={<Home />}/>
        </Route>
        <Route path="/about">
          <Template title="About" content={<About />} />
        </Route>
        <Route path="/projects">
          <Template title="Projects" content={<Projects />} />
        </Route>
        <Route path="/experience">
          <Template title="Experience" content={<Experience />} />
        </Route>
        <Route path="/education">
          <Template title="Education" content={<Education />} />
        </Route>
        <Route path="/snap-scroll-example">
          <SnapScrollExample />
        </Route>
        {/*
          <Route path="/about">
            <Home title="About" />
          </Route>
          <Route path="/dashboard">
            <Home title="Dashboard" />
          </Route>
      */}
      </HashRouter>
    </IonApp>
  )
};

export default App;

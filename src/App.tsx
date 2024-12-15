import { HashRouter, Link, Route, Switch } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import Home from './pages/Home';

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
import MainMenu from './components/MainMenu';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <MainMenu></MainMenu>
    <HashRouter>
      <Route path="/">
        <Template title="Home" content={<Home />} />
      </Route>
      <Route path="/about">
        <Template title="About" content={<Home />} />
      </Route>
      <Route path="/dashboard">
        <Template title="Dashboard" content={<Home />} />
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
);

export default App;

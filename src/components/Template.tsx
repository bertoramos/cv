import { IonMenu, IonContent, IonHeader, IonPage, IonToolbar, IonTitle, IonMenuButton, IonButtons } from '@ionic/react';
import { Link } from 'react-router-dom';
import ExploreContainer from '../components/ExploreContainer';
import React from 'react';
import MainMenuButton from './MainMenuButton';
import MainMenuContent from './MainMenuContent';

const Template: React.FC<{ title: string, content: React.ReactNode }> = ({ title, content }) => {

  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMainMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    
      <IonPage>


        <IonHeader>
          <IonToolbar>
            <IonTitle>{title}</IonTitle>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/snap-scroll-example">Snap Scroll Example</Link>
              </li>
            </ul>
          </IonToolbar>
        </IonHeader>

        {/*
        <IonContent fullscreen>
        <ExploreContainer />
        It contains {title} page
      </IonContent>
      */}
        {content}
      </IonPage>
      
  );
};

export default Template;

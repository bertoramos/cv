import { IonHeader, IonPage, IonIcon } from '@ionic/react';
import React from 'react';

import { logoIonic } from 'ionicons/icons';

import "./Template.css";

const Template: React.FC<{ title: string, content: React.ReactNode }> = ({ title, content }) => {

  return (

    <IonPage>

      <IonHeader id="main_header">
        <IonIcon id="main_logo" icon={logoIonic} color="primary" size="large"></IonIcon>
        {
        /*
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
        */
        }
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

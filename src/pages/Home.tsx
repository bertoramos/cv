
import { IonCol, IonContent, IonGrid, IonIcon, IonImg, IonRow } from '@ionic/react';
import './Home.css';
import { logoLibelium } from '../private/assets/logos';

const Home: React.FC = () => {
    return (
        <IonContent id="home-content">
            <IonGrid id="home-grid">
                <IonRow style={{ height: '100%' }}>
                    <IonCol
                        id="home-image-column"
                        size="12"
                        size-md="6"
                        push-md="6"
                    >
                        <img
                            id="home-image"
                            src="/cv/assets/images/home/avatar_2_min2.svg"
                            alt="Home photo"
                        />
                    </IonCol>
                    <IonCol
                        id="home-text-column"
                        size="12"
                        size-md="6"
                        pull-md="6"
                    >
                        <div id="home-text">
                            <p id="home-title">
                                Hey there,<br />
                                Alberto here
                            </p>
                            <p id="home-subtitle">
                                I'm computer scientist from<br />
                                Canary Island, Spain
                            </p>                            
                        </div>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    );
};

export default Home;

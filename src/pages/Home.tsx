
import { IonCol, IonContent, IonGrid, IonImg, IonRow } from '@ionic/react';
import './Home.css';

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
                            src="https://www.miicharacters.com/miis/thumb/485_batman.jpg"
                            alt="Example"
                        />
                    </IonCol>
                    <IonCol
                        id="home-text-column"
                        size="12"
                        size-md="6"
                        pull-md="6"
                    >
                        <div id="home-text">
                            <p id="home-title">Hey there,<br/> Alberto here</p>
                            <p id="home-subtitle">I'm computer scientist<br/>from
                            Canary Island, Spain</p>
                        </div>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    );
};

export default Home;

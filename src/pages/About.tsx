
import { IonCol, IonContent, IonGrid, IonRow } from '@ionic/react';
import './About.css';
import { LoremIpsum } from 'react-lorem-ipsum';

const About: React.FC = () => {
    return (
        <IonContent id="about-content">
            <IonGrid id="about-grid">
                <IonRow style={{ height: '100%' }}>

                    <IonCol
                        id="about-image-column"
                        size="12"
                        size-md="6"
                        push-md="6"
                    >
                        <img
                            id="about-image"
                            src="https://www.miicharacters.com/miis/thumb/485_batman.jpg"
                            alt="Example"
                        />
                    </IonCol>
                    <IonCol
                        id="about-text-column"
                        size="12"
                        size-md="6"
                        pull-md="6"
                    >
                        <div id="about-text">
                            <p id="about-title">About</p>
                            <p id="about-content">
                                <LoremIpsum p={2} />
                            </p>
                        </div>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    );
};

export default About;

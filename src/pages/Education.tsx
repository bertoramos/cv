
import { IonAccordion, IonAccordionGroup, IonCard, IonContent, IonItem, IonLabel } from '@ionic/react';
import './Education.css';

const Education: React.FC = () => {
    return (
        <IonContent>
            <IonAccordionGroup expand="inset">
                <IonAccordion value="first">
                    <IonItem slot="header" color="light">
                        <IonLabel>First Accordion</IonLabel>
                    </IonItem>
                    <div className="ion-padding" slot="content">
                        <IonCard>content</IonCard>
                    </div>
                </IonAccordion>
                <IonAccordion value="second">
                    <IonItem slot="header" color="light">
                        <IonLabel>Second Accordion</IonLabel>
                    </IonItem>
                    <div className="ion-padding" slot="content">
                    <IonCard>content</IonCard>
                    </div>
                </IonAccordion>
                <IonAccordion value="third">
                    <IonItem slot="header" color="light">
                        <IonLabel>Third Accordion</IonLabel>
                    </IonItem>
                    <div className="ion-padding" slot="content">
                    <IonCard> content</IonCard>
                    </div>
                </IonAccordion>
            </IonAccordionGroup>
        </IonContent>
    );
};

export default Education;

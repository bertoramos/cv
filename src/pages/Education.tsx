
import { IonAccordion, IonAccordionGroup, IonButton, IonCard, IonCardContent, IonCardHeader, IonChip, IonCol, IonContent, IonIcon, IonItem, IonLabel, IonRow, IonTitle } from '@ionic/react';
import './Education.css';
import { globe, location, logoAndroid } from 'ionicons/icons';



interface EducationComponentProps {
    title: string;
    company: string;
    time: string;
    description: string;
    technologies: string[];
    image: string;
}

const EducationComponent: React.FC<EducationComponentProps> = ({ title, company, time, description, technologies, image }) => {
    return (
        <IonAccordion>
            <IonItem slot="header" color="light">
                <IonLabel className='ion-text-start'>Title @ Corporation</IonLabel>
                <IonLabel className='ion-text-end'>From - To</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
                <IonCard>

                    <IonCardHeader>
                        <IonRow>
                            <IonCol size="auto">
                                <IonIcon icon={location} /> Place
                            </IonCol>
                            <IonCol size="auto">
                                <IonIcon icon={globe} /> Web
                            </IonCol>
                        </IonRow>
                    </IonCardHeader>

                    <IonCardContent>
                        <IonRow>
                            <IonCol offset="0" size="12" size-md="2" push-md="9.5" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img style={{ margin: "auto" }} src="https://picsum.photos/100" alt="" />
                            </IonCol>
                            <IonCol offset="0.5" size="12" size-md="9" pull-md="2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laborum ipsa eveniet mollitia, ex blanditiis eius totam dignissimos aspernatur suscipit, distinctio atque? Nulla ex deleniti voluptates, quas laudantium iure tempore.
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            {
                                technologies.map((tech, index) => (
                                    <IonCol key={index} size="auto">
                                        <IonChip>
                                            <IonIcon icon={logoAndroid} color="primary"></IonIcon>
                                            <IonLabel>{tech}</IonLabel>
                                        </IonChip>
                                    </IonCol>
                                ))
                            }
                        </IonRow>
                    </IonCardContent>
                </IonCard>
            </div>
        </IonAccordion>
    );
};

const Education: React.FC = () => {
    return (
        <IonContent>
            <IonTitle className="ion-text-center ion-padding" style={{fontSize: "4vh"}}>Education</IonTitle>
            <IonAccordionGroup expand="inset">
                <EducationComponent
                    title={''}
                    company={''}
                    time={''}
                    description={''}
                    technologies={["tech1", "tech2"]} 
                    image={''}
                />
                <EducationComponent
                    title={''}
                    company={''}
                    time={''}
                    description={''}
                    technologies={["tech1", "tech2"]} 
                    image={''}
                />
            </IonAccordionGroup>
        </IonContent>
    );
};

export default Education;


import { IonAccordion, IonAccordionGroup, IonButton, IonCard, IonCardContent, IonCardHeader, IonChip, IonCol, IonContent, IonIcon, IonItem, IonLabel, IonRow, IonTitle } from '@ionic/react';
import './Experience.css';
import { globe, location, logoAndroid } from 'ionicons/icons';



interface ExperienceComponentProps {
    title: string;
    company: string;
    from: string;
    to: string;
    place: string;
    web: string;
    logo: string;
    description: string;
    technologies: {
        name: string;
        logo: any;
    }[],
    references: {
        name: string;
        url: string;
    }[]
}

const ExperienceComponent: React.FC<ExperienceComponentProps> = ( props ) => {
    return (
        <IonAccordion>
            <IonItem slot="header" color="light">
                <IonLabel className='ion-text-start'>{props.title} @ {props.company}</IonLabel>
                <IonLabel className='ion-text-end'>{props.from} - {props.to}</IonLabel>
            </IonItem>
            <div className="ion-padding" slot="content">
                <IonCard>

                    <IonCardHeader>
                        <IonRow>
                            <IonCol size="auto">
                                <IonIcon icon={location} /> {props.place}
                            </IonCol>
                            <IonCol size="auto">
                                <IonIcon icon={globe} /> <a href={"http://" + props.web} target="_blank">{props.web}</a>
                            </IonCol>
                        </IonRow>
                    </IonCardHeader>

                    <IonCardContent>
                        <IonRow>
                            <IonCol offset="0" size="12" size-md="2" push-md="9.5" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img style={{ margin: "auto" }} src={props.logo} alt="" />
                            </IonCol>
                            <IonCol offset="0.5" size="12" size-md="9" pull-md="2">
                                {props.description}
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            {
                                props.technologies.map((tech, index) => (
                                    <IonCol key={index} size="auto">
                                        <IonChip>
                                            <IonIcon icon={tech.logo} color="primary"></IonIcon>
                                            <IonLabel>{tech.name}</IonLabel>
                                        </IonChip>
                                    </IonCol>
                                ))
                            }
                        </IonRow>
                        <IonRow>
                            {
                                props.references.map((ref, index) => (
                                    <IonCol key={index} size="auto">
                                        <IonButton fill="clear" href={ref.url} target="_blank">{ref.name}</IonButton>
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

const Experience: React.FC = () => {
    return (
        <IonContent>
            <IonTitle className="ion-text-center ion-padding" style={{fontSize: "4vh"}}>Experience</IonTitle>
            <IonAccordionGroup expand="inset">
                <ExperienceComponent
                    title={'Title1'}
                    company={'Company1'}
                    from={'From1'}
                    to={'To1'}
                    place={'Place1'}
                    web={'www.web1.com'}
                    logo={'https://picsum.photos/200'}
                    description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laborum ipsa eveniet mollitia, ex blanditiis eius totam dignissimos aspernatur suscipit, distinctio atque? Nulla ex deleniti voluptates, quas laudantium iure tempore.'}
                    technologies={
                        [{name: "tech11", logo: logoAndroid},
                        {name: "tech12", logo: logoAndroid}]
                    }  
                    references={
                        [
                            {name: "Reference11", url: "http://google.com"},
                            {name: "Reference12", url: "http://google.com"}
                        ]
                    }                  
                />
                <ExperienceComponent
                    title={'Title2'}
                    company={'Company2'}
                    from={'From2'}
                    to={'To2'}
                    place={'Place2'}
                    web={'www.web2.com'}
                    logo={'https://picsum.photos/200'}
                    description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laborum ipsa eveniet mollitia, ex blanditiis eius totam dignissimos aspernatur suscipit, distinctio atque? Nulla ex deleniti voluptates, quas laudantium iure tempore. Grade: 10'}
                    technologies={
                        [{name: "tech21", logo: logoAndroid},
                        {name: "tech22", logo: logoAndroid}]
                    }
                    references={
                        [
                            {name: "Reference21", url: "http://google.com"},
                            {name: "Reference22", url: "http://google.com"}
                        ]
                    }    
                />
            </IonAccordionGroup>
        </IonContent>
    );
};

export default Experience;

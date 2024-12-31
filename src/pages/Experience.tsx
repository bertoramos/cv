
import { IonAccordion, IonAccordionGroup, IonButton, IonCard, IonCardContent, IonCardHeader, IonChip, IonCol, IonContent, IonIcon, IonItem, IonLabel, IonRow, IonTitle } from '@ionic/react';
import './Experience.css';
import { globe, location, logoAndroid, logoDocker, logoHtml5, logoPython, logoRss } from 'ionicons/icons';



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

const ExperienceComponent: React.FC<ExperienceComponentProps> = (props) => {
    return (
        <IonAccordion>
            <IonItem  className="experience-slot" slot="header">
                <IonLabel className='ion-text-start'>{props.title} @ {props.company}</IonLabel>
                <IonLabel className='ion-text-end'>{props.from} - {props.to}</IonLabel>
            </IonItem>
            <div className="experience-card-div ion-padding" slot="content">
                <IonCard className="experience-card">

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
                            <IonCol size="12" size-md="2" push-md="9.5" className='ion-text-center'>
                                <img style={{ margin: "auto" }} src={props.logo} alt="" />
                            </IonCol>
                            <IonCol size="12" size-md="9" pull-md="2">
                                <div>{props.description}</div>
                                <div className="ion-padding-top">
                                    {
                                        props.technologies.map((tech, index) => (
                                            <IonCol key={index} size="auto">
                                                <IonChip>
                                                    <IonIcon icon={tech.logo} color="light"></IonIcon>
                                                    <IonLabel color="light">{tech.name}</IonLabel>
                                                </IonChip>
                                            </IonCol>
                                        ))
                                    }
                                </div>
                                <div className="ion-padding-top">
                                    {
                                        props.references.map((ref, index) => (
                                            <IonCol key={index} size="auto">
                                                <IonButton fill="clear" href={ref.url} target="_blank">{ref.name}</IonButton>
                                            </IonCol>
                                        ))
                                    }
                                </div>
                            </IonCol>
                        </IonRow>

                    </IonCardContent>
                </IonCard>
            </div>
        </IonAccordion>
    );
};

const Experience: React.FC = () => {
    return (
        <IonContent id="experience-content">
            <IonTitle className="ion-text-center ion-padding" style={{ fontSize: "4vh" }}>Experience</IonTitle>
            <IonAccordionGroup expand="inset">
                <ExperienceComponent
                    title={'Data scientist'}
                    company={'Fundación Universitaria de Las Palmas (FULP)'}
                    from={'December 2023'}
                    to={'December 2024'}
                    place={'Las Palmas de Gran Canaria'}
                    web={'www.fulp.es'}
                    logo={'https://picsum.photos/200'}
                    description={'"Investigo" programme: "SMART GIP: Applying Artificial Intelligence (AI) to Integrated Project Management". Optimization of key processes through development through the development of a platform for payroll management and electronic invoicing.'}
                    technologies={
                        [{ name: "Python", logo: logoPython },
                         { name: "Spacy", logo: logoRss },
                         { name: "PHP", logo: logoRss},
                         { name: "HTML/CSS", logo: logoHtml5}]
                    }
                    references={
                        [
                            { name: "SmartGIP", url: "https://www.fulp.es/index.php/actualidad/noticias/la-fulp-investiga-la-aplicacion-de-inteligencia-artificial-la-gestion-de" },
                        ]
                    }
                />
                <ExperienceComponent
                    title={'Computer scientist'}
                    company={'Subsea Mechatronics'}
                    from={'Jan 2022'}
                    to={'Jul 2023'}
                    place={'Las Palmas de Gran Canaria'}
                    web={'https://www.ssmrovs.com/'}
                    logo={'https://picsum.photos/200'}
                    description={'"Investigo" programme: "IngenIoT". Improved perception of underwater environments through 3D reconstruction and analysis of data captured in campaigns.'}
                    technologies={
                        [{ name: "Python", logo: logoPython },
                         { name: "C++", logo: logoRss },
                         { name: "ROS1", logo: logoRss},
                         { name: "ROS1", logo: logoRss},
                         { name: "Docker", logo: logoDocker},
                         { name: "NVIDIA Jetson", logo: logoRss}
                        ]
                    }
                    references={
                        []
                    }
                />
                <ExperienceComponent
                    title={'Computer scientist'}
                    company={'IUCTC ULPGC'}
                    from={'Sep 2019'}
                    to={'Ene 2020'}
                    place={'Las Palmas de Gran Canaria'}
                    web={'https://ciberlandia.org'}
                    logo={'https://picsum.photos/200'}
                    description={'Computer science internships. Support in the design and development of activities for the Cyberlandia Project and the Science Week.'}
                    technologies={
                        [{ name: "Python", logo: logoPython },
                         { name: "Inkscape", logo: logoRss}
                        ]
                    }
                    references={
                        [
                            {name: "Semana de la Ciencia 2019", url: "https://ciberlandia.org/semanas-de-la-ciencia-y-la-innovacion-en-canarias-2019-gran-canaria/"}
                        ]
                    }
                />
            </IonAccordionGroup>
        </IonContent>
    );
};

export default Experience;

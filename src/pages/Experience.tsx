
import { IonAccordion, IonAccordionGroup, IonButton, IonCard, IonCardContent, IonCardHeader, IonChip, IonCol, IonContent, IonIcon, IonItem, IonLabel, IonRow, IonTitle } from '@ionic/react';
import { globe, location, logoHtml5, logoLaravel, logoRss } from 'ionicons/icons';

import { logoCpp, logoPython, logoRos, logoDocker, logoNvidia, logoInkscape, logoSpacy, logoPHP, logoHTML, logoEV3 } from '../private/assets/logos';
//import logoPython from '../private/assets/logos/logoPython.svg';
//import logoCpp from '../private/assets/logos/logoCpp.svg';

import './Experience.css';

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
            <IonItem className="experience-slot" slot="header">
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
                                <img className="experience-component-image" src={props.logo} alt="" />
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
                    from={'Dec 2023'}
                    to={'Dec 2024'}
                    place={'Las Palmas de Gran Canaria'}
                    web={'www.fulp.es'}
                    logo={'/cv/assets/logos/logoFULP.svg'}
                    description={'"Investigo" programme: "SMART GIP: Applying Artificial Intelligence (AI) to Integrated Project Management". Optimization of key processes through development through the development of a platform for payroll management and electronic invoicing.'}
                    technologies={
                        [{ name: "Python", logo: logoPython },
                        { name: "Spacy", logo: logoSpacy },
                        { name: "PHP", logo: logoPHP },
                        { name: "HTML/CSS", logo: logoHTML },
                        { name: "Laravel", logo: logoLaravel }
                        ]
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
                    web={'www.ssmrovs.com/'}
                    logo={'/cv/assets/logos/logoSSM.svg'}
                    description={'"Investigo" programme: "IngenIoT". Improving the perception of the underwater environment through 3D reconstruction and analysis of campaign data.'}
                    technologies={
                        [{ name: "Python", logo: logoPython },
                        { name: "C++", logo: logoCpp },
                        { name: "ROS1", logo: logoRos },
                        { name: "Docker", logo: logoDocker },
                        { name: "NVIDIA Jetson", logo: logoNvidia }
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
                    web={'www.ciberlandia.org'}
                    logo={'/cv/assets/logos/logoEII.svg'}
                    description={'Computer science internships. Support in the design and development of activities for the Cyberlandia Project and the Science Week.'}
                    technologies={
                        [
                            { name: "Python", logo: logoPython },
                            { name: "Lego Mindstorm EV3", logo: logoEV3 },
                            { name: "Inkscape", logo: logoInkscape }
                        ]
                    }
                    references={
                        [
                            { name: "Semana de la Ciencia 2019", url: "https://ciberlandia.org/semanas-de-la-ciencia-y-la-innovacion-en-canarias-2019-gran-canaria/" }
                        ]
                    }
                />
            </IonAccordionGroup>
        </IonContent>
    );
};

export default Experience;

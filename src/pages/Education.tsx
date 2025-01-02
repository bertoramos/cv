
import { IonAccordion, IonAccordionGroup, IonButton, IonCard, IonCardContent, IonCardHeader, IonChip, IonCol, IonContent, IonIcon, IonItem, IonLabel, IonRow, IonTitle } from '@ionic/react';
import './Education.css';
import { globe, location, logoAndroid, logoRss } from 'ionicons/icons';
import { logoCpp, logoPython } from '../private/assets/logos';



interface EducationComponentProps {
    title: string;
    corporation: string;
    from: string;
    to: string;
    place: string;
    web: string;
    logo: string;
    description: string;
    technologies: {
        name: string;
        logo: any;
    }[]
}

const EducationComponent: React.FC<EducationComponentProps> = ( props ) => {
    return (
        <IonAccordion>
            <IonItem className="education-slot" slot="header">
                <IonLabel className='ion-text-start'>{props.title} @ {props.corporation}</IonLabel>
                <IonLabel className='ion-text-end'>{props.from} - {props.to}</IonLabel>
            </IonItem>
            <div className="education-card-div ion-padding" slot="content">
                <IonCard className='education-card'>

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
                            <IonCol offset="0" size="12" size-md="2" push-md="9.5" className="ion-text-center">
                                <img style={{ margin: "auto", height: "50%" }} src={props.logo} alt={props.logo} />
                            </IonCol>
                            <IonCol size="12" size-md="9" pull-md="2">
                                <div>{props.description}</div>
                                <div className='ion-padding-top'>{
                                props.technologies.map((tech, index) => (
                                    <IonCol key={index} size="auto" >
                                        <IonChip>
                                            <IonIcon icon={tech.logo}></IonIcon>
                                            <IonLabel>{tech.name}</IonLabel>
                                        </IonChip>
                                    </IonCol>
                                ))
                            }</div>
                            </IonCol>
                        </IonRow>
                    </IonCardContent>
                </IonCard>
            </div>
        </IonAccordion>
    );
};

const Education: React.FC = () => {
    return (
        <IonContent id="education-content">
            <IonTitle className="ion-text-center ion-padding">Education</IonTitle>
            <IonAccordionGroup expand="inset">
                <EducationComponent
                    title={'PhD in Business, Internet and Communications Technologies'}
                    corporation={'ULPGC'}
                    from={'Oct 2022'}
                    to={'Present'}
                    place={'Las Palmas de Gran Canaria'}
                    web={'https://www2.ulpgc.es/plan-estudio/6024'}
                    logo={'/cv/assets/logos/logoDoctorado.svg'}
                    description={'A multidisciplinary programme focusing on the development and management of information, communication and knowledge technologies and their socio-economic impact.'}
                    technologies={
                        []
                    }                    
                />
                <EducationComponent
                    title={'Master\'s Degree in Intelligent Systems and Numerical Applications in Engineering'}
                    corporation={'ULPGC'}
                    from={'Oct 2020'}
                    to={'Sep 2022'}
                    place={'Las Palmas de Gran Canaria'}
                    web={'www.siani.es'}
                    logo={'/cv/assets/logos/logoSIANI.svg'}
                    description={'The programme has been designed to equip students with the necessary skills and tools to initiate R&D&I activities in areas such as artificial intelligence and numerical applications in engineering. The programme is taught by the University Institute of Intelligent Systems and Numerical Applications in Engineering (SIANI), a research and teaching centre for postgraduate studies attached to the ULPGC. Grade: 9.505'}
                    technologies={
                        [
                            {name: "Python", logo: logoPython},
                            {name: "C++", logo: logoCpp},
                            {name: "Pytorch", logo: logoRss},
                            {name: "Waspmote", logo: logoRss}
                        ]
                    }     
                />
                <EducationComponent
                    title={'Degree in Computer Engineering with a major in Computer Science'}
                    corporation={'ULPGC'}
                    from={'Jun 2016'}
                    to={'Jul 2020'}
                    place={'Las Palmas de Gran Canaria'}
                    web={'www.eii.ulpgc.es'}
                    logo={'/cv/assets/logos/logoEII.svg'}
                    description={'The programme offers a comprehensive training in computer science with a focus on multidisciplinary research and innovation tasks. It prepares students for a range of tasks, from theoretical analysis to software development, addressing topics such as algorithms and computational complexity, systems modelling and analysis, user interface design and evaluation, intelligent systems and data mining, advanced numerical methods, language processing and Semantic Web technologies. This approach combines theoretical foundations with practical tools, enabling students to solve complex problems and develop innovative solutions. Grade: 8.163'}
                    technologies={
                        [
                            {name: "Python", logo: logoPython},
                            {name: "Java", logo: logoRss},
                            {name: "Matlab", logo: logoRss},
                            {name: "Arduino", logo: logoRss},
                            {name: "Linux", logo: logoRss}
                        ]
                    }     
                />
            </IonAccordionGroup>
        </IonContent>
    );
};

export default Education;

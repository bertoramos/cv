import React, { useRef } from "react";
import { IonButton, IonButtons, IonChip, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonLabel, IonModal, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import "./ProjectComponent.css";
import { mailOutline, logoGithub, logoLinkedin } from "ionicons/icons";

interface ProjectDetailProps {
    trigger: string;
};

const ProjectDetail: React.FC<ProjectDetailProps> = (props) => {

    const modal = useRef<HTMLIonModalElement>(null);
    const dismiss = () => {
        modal.current?.dismiss(null, 'backdrop');
    };

    return (
        <IonModal className="project-detail-modal" ref={modal} trigger={props.trigger}>
            <IonHeader style={{ "--background": "#54d61c", "--ion-background-color": "red" }}>
                <IonToolbar>
                    <IonTitle></IonTitle>
                    <IonButtons slot="end">
                        <IonButton className="ion-margin ion-padding" onClick={() => dismiss()}>Close</IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="project-detail-modal-content ion-padding">
                Project details
            </IonContent>
        </IonModal>
    );
};

interface ProjectComponentProps {
    image: string;
    title: string;
    description: string;
    technologies: {
        name: string;
        logo: any;
    }[];
}

const ProjectComponent: React.FC<ProjectComponentProps> = (props) => {

    return (
        <IonGrid className="project-component-grid">
            <IonRow>
                <IonCol
                    className="project-component-image-column project-component-center-column"
                    size="12"
                    size-md="6"
                >
                    <img src={props.image} alt={props.title} />
                </IonCol>
                <IonCol
                    size="12"
                    size-md="6"
                    className="project-component-text-column project-component-center-column">
                    <p className="project-component-title">{props.title}</p>
                    <div className="project-component-description">
                        <div className="ion-padding-bottom project-component-description-text">{props.description}</div>
                        <IonButton
                            id={props.title + "-open-project-detail-modal"}
                            fill="clear"
                            className="project-component-detail-button">
                            Details
                        </IonButton>
                        <ProjectDetail 
                            trigger={props.title + "-open-project-detail-modal"}
                        />
                        <div>
                            {
                                props.technologies.map((tech, index) => (
                                    <IonChip color="primary" key={index}>
                                        <IonIcon color="light" icon={tech.logo}></IonIcon>
                                        <IonLabel color="light">{tech.name}</IonLabel>
                                    </IonChip>
                                ))
                            }
                        </div>
                    </div>
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default ProjectComponent;

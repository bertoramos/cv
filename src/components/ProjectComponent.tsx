
import { IonCol, IonGrid, IonRow } from "@ionic/react";

import "./ProjectComponent.css";

const ProjectComponent: React.FC<{ title: string, description: string, image: string }> = ({ title, description, image }) => {

    return (
        <IonGrid className="project-component-grid">
            <IonRow>
                <IonCol 
                    className="project-component-image-column project-component-center-column"
                    size="12"
                    size-md="6"
                    >
                    <img src={image} alt={title} />
                </IonCol>
                <IonCol
                    size="12"
                    size-md="6"
                    className="project-component-text-column project-component-center-column">
                    <p className="project-component-title">{title}</p>
                    <p className="project-component-description">{description}</p>
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default ProjectComponent;
import { IonCol, IonGrid, IonRow } from "@ionic/react";

const ProjectComponent: React.FC<{ title: string, content: string, image: string }> = ({ title, content, image }) => {

    return (
        <IonGrid style={{marginTop: "30vh"}}>
            <IonRow>
                <IonCol style={{marginLeft: "-10%"}}>
                    <img style={{borderRadius: "50px"}} src={image} alt={title} />
                </IonCol>
                <IonCol>
                    <h1>{title}</h1>
                    <p>{content}</p>
                </IonCol>
            </IonRow>
        </IonGrid>
    );
};

export default ProjectComponent;
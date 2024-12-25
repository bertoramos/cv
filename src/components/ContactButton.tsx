import { IonButton, IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonContent, IonGrid, IonRow, IonCol, IonIcon, IonChip } from "@ionic/react";
import { useRef } from "react";

import "./ContactButton.css";
import { logoGithub, logoLinkedin, mail, mailOutline } from "ionicons/icons";

interface ContactButtonProps {

}

const ContactButton: React.FC<ContactButtonProps> = (props) => {
    const modal = useRef<HTMLIonModalElement>(null);
    const dismiss = () => {
        modal.current?.dismiss(null, 'backdrop');
    };

    return (
        <>
            <IonButton className="contact-button" id="open-modal" expand="block">
                Contact
            </IonButton>
            <IonModal className="contact-modal" ref={modal} trigger="open-modal">
                <IonHeader style={{ "--background": "#54d61c", "--ion-background-color": "red" }}>
                    <IonToolbar>
                        <IonTitle>Contact</IonTitle>
                        <IonButtons slot="end">
                            <IonButton className="ion-margin ion-padding" onClick={() => dismiss()}>Close</IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="contact-modal-content ion-padding">
                    <IonGrid>
                        <IonRow>
                            <IonCol size="12" size-md="6" offset="0" offset-md="0.5">
                                <p>Get in touch!</p>
                                <p>
                                    Hey! ☺️ Feel free to send me an email at <a href="mailto:albertoramossanchez@outlook.es">albertoramossanchez@outlook.es</a> or contact me on social media.
                                </p>
                                <div>
                                    <IonButton
                                        href="mailto:albertoramossanchez@outlook.es"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        shape="round"
                                        fill="clear">
                                        <IonIcon className="ion-padding" size="large" slot="icon-only" icon={mailOutline} />
                                    </IonButton>
                                    <IonButton
                                        href="https://github.com/bertoramos"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        shape="round"
                                        fill="clear">
                                        <IonIcon className="ion-padding" size="large" slot="icon-only" icon={logoGithub} />
                                    </IonButton>
                                    <IonButton
                                        href="https://www.linkedin.com/in/alberto-rs/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        shape="round"
                                        fill="clear">
                                        <IonIcon className="ion-padding" size="large" slot="icon-only" icon={logoLinkedin} />
                                    </IonButton>
                                </div>
                            </IonCol>
                            <IonCol size="12" size-md="5.5" className="ion-text-center">
                                <img src="https://picsum.photos/400" alt="" />
                            </IonCol>
                        </IonRow>

                    </IonGrid>
                </IonContent>
            </IonModal>
        </>
    );
}

export default ContactButton;
import { IonButton, IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonContent, IonGrid, IonRow, IonCol, IonIcon } from "@ionic/react";
import { useRef } from "react";

import "./ContactButton.css";
import { chatbubblesOutline, download, logoGithub, logoLinkedin, mailOutline } from "ionicons/icons";
import { CV_URL } from "../utils/constants";

interface ContactButtonProps {

}

const ContactButton: React.FC<ContactButtonProps> = (props) => {
    const modal = useRef<HTMLIonModalElement>(null);
    const dismiss = () => {
        modal.current?.dismiss(null, 'backdrop');
    };

    return (
        <>
            <IonButton className="contact-button" shape="round" id="open-contact-modal" expand="block">
                <IonIcon slot="start" icon={chatbubblesOutline}></IonIcon>
                Contact
            </IonButton>
            <IonModal className="contact-modal" ref={modal} trigger="open-contact-modal">
                <IonHeader style={{ "--background": "#54d61c", "--ion-background-color": "red" }}>
                    <IonToolbar>
                        <IonButtons slot="end">
                            <IonButton className="ion-margin ion-padding" onClick={() => dismiss()}>Close</IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="contact-modal-content ion-padding">
                    <IonGrid>
                        <IonRow>
                            <IonCol id="contact-text-col" size="12" size-md="6" offset="0" offset-md="0.5">
                                <div id="contact-text-container">
                                    <h1>Get in touch!</h1>
                                    <p>
                                        Hey! 🤗 Feel free to send me an email at <a href="mailto:albertoramossanchez@outlook.es">albertoramossanchez@outlook.es</a> or contact me on social media.
                                    </p>
                                    <div id="contact-buttons-container">
                                        <IonButton
                                            href="mailto:albertoramossanchez@outlook.es"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            shape="round"
                                            fill="clear">
                                            <IonIcon className="ion-padding" size="large" slot="icon-only" icon={mailOutline} />
                                        </IonButton>
                                        <IonButton
                                            href="https://www.linkedin.com/in/alberto-rs/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            shape="round"
                                            fill="clear">
                                            <IonIcon className="ion-padding" size="large" slot="icon-only" icon={logoLinkedin} />
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
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            shape="round"
                                            fill="clear"
                                            href={CV_URL}>
                                            <IonIcon className="ion-padding" size="large" slot="icon-only" icon={download} /> <span style={{ "textAlign": "center", "fontFamily": "Source Code Pro Black" }}>resume</span>
                                        </IonButton>
                                    </div>
                                </div>
                            </IonCol>
                            <IonCol size="12" size-md="5.5" className="ion-text-center">
                                <img id="contact-image" src="/cv/assets/images/contact/contact_2.jpeg" alt="" />
                            </IonCol>
                        </IonRow>

                    </IonGrid>
                </IonContent>
            </IonModal>
        </>
    );
}

export default ContactButton;
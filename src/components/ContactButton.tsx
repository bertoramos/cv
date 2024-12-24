import { IonButton, IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonContent } from "@ionic/react";
import { useRef } from "react";

import "./ContactButton.css";

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
            <IonModal ref={modal} trigger="open-modal">
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Contact</IonTitle>
                        <IonButtons slot="end">
                            <IonButton onClick={() => dismiss()}>Close</IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <p>
                        Contact
                    </p>
                </IonContent>
            </IonModal>
        </>
    );
}

export default ContactButton;
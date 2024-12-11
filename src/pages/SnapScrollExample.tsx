import { IonCard, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import "./SnapScrollExample.css";
import { Link } from "react-router-dom";


const SnapScrollExample = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Snap Scroll Example</IonTitle>

                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/snap-scroll-example">Snap Scroll Example</Link>
                        </li>
                    </ul>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className="snap-container">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <div className="snap-section">
                            <div>Card {index}</div>
                        </div>
                    ))}
                </div>
            </IonContent>
        </IonPage>
    );
}

export default SnapScrollExample;


import { IonCol, IonContent, IonGrid, IonImg, IonRow } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
    return (
        <IonContent id="home-content">
            <IonGrid id="home-grid">
                <IonRow style={{ height: '100%' }}>

                    <IonCol
                        id="home-image-column"
                        size="12"
                        size-md="6"
                        push-md="6"
                    >
                        <img
                            id="home-image"
                            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/699db055-4f06-4691-a565-25e82ea7b0b6/dgloiyq-3c381d84-e934-4153-b202-eebaba21faf0.png/v1/fill/w_800,h_800,q_80,strp/my_nintendo_mii_character_by_rorothesupergamerboy_dgloiyq-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODAwIiwicGF0aCI6IlwvZlwvNjk5ZGIwNTUtNGYwNi00NjkxLWE1NjUtMjVlODJlYTdiMGI2XC9kZ2xvaXlxLTNjMzgxZDg0LWU5MzQtNDE1My1iMjAyLWVlYmFiYTIxZmFmMC5wbmciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.7L-3jGpwIu6jaeEr2wod9_cSdHvi-59PJiVVGvV-6dU"
                            alt="Example"
                        />
                    </IonCol>
                    <IonCol
                        id="home-text-column"
                        size="12"
                        size-md="6"
                        pull-md="6"
                    >
                        <div id="home-text">
                            <p id="home-title">
                                Hey there,<br />
                                Alberto here
                            </p>
                            <p id="home-subtitle">
                                I'm computer scientist from<br />
                                Canary Island, Spain
                            </p>
                        </div>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    );
};

export default Home;

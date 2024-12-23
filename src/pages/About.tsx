
import { IonCol, IonContent, IonGrid, IonIcon, IonRow } from '@ionic/react';
import { download } from 'ionicons/icons';

import './About.css';

const About: React.FC = () => {
    return (
        <IonContent id="about-content">
            <IonGrid id="about-grid">
                <IonRow style={{ height: '100%' }}>

                    <IonCol
                        id="about-image-column"
                        size="12"
                        size-md="6"
                        push-md="6"
                    >
                        <img
                            id="about-image"
                            src="https://www.miicharacters.com/miis/thumb/485_batman.jpg"
                            alt="Example"
                        />
                    </IonCol>
                    <IonCol
                        id="about-text-column"
                        size="12"
                        size-md="6"
                        pull-md="6"
                    >
                        <div id="about-text">
                            <p id="about-title">About</p>
                            <p id="about-content">
                                Lorem ipsum odor amet, consectetuer adipiscing elit. Tempor tincidunt habitant; pretium malesuada laoreet enim nam? Consectetur donec fermentum, in taciti per lectus eget lobortis. Vel rhoncus congue nostra, malesuada tempus faucibus enim semper. Vehicula ipsum vel mollis leo malesuada velit tristique pulvinar. Commodo class nulla massa convallis donec a fermentum et feugiat. Taciti molestie facilisi eu vehicula porttitor odio ridiculus. Interdum scelerisque orci ultricies pharetra vestibulum.
                                Phasellus ante facilisis rhoncus habitasse nisi vestibulum. Posuere dolor ultricies consequat condimentum tellus non erat sagittis posuere. Arcu congue semper egestas metus ut feugiat class lorem. Etiam eu sollicitudin netus scelerisque non nibh fusce. Volutpat vulputate nec dui, nisi egestas enim. Malesuada nulla sociosqu vivamus montes eleifend natoque. Euismod porttitor pulvinar nisi mi, nec venenatis. Faucibus senectus mattis congue habitasse quisque sollicitudin bibendum.
                            </p>
                            <a id="cv-download" target="_blank" href="https://file-examples.com/storage/fefaeec240676402c9bdb74/2017/10/file-example_PDF_1MB.pdf">
                                <IonIcon icon={download} /> resume
                            </a>
                        </div>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    );
};

export default About;

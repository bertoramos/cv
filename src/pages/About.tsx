
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
                        size-md="4"
                        push-md="8"
                    >
                        <img
                            id="about-image"
                            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/699db055-4f06-4691-a565-25e82ea7b0b6/dgloiyq-3c381d84-e934-4153-b202-eebaba21faf0.png/v1/fill/w_800,h_800,q_80,strp/my_nintendo_mii_character_by_rorothesupergamerboy_dgloiyq-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODAwIiwicGF0aCI6IlwvZlwvNjk5ZGIwNTUtNGYwNi00NjkxLWE1NjUtMjVlODJlYTdiMGI2XC9kZ2xvaXlxLTNjMzgxZDg0LWU5MzQtNDE1My1iMjAyLWVlYmFiYTIxZmFmMC5wbmciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.7L-3jGpwIu6jaeEr2wod9_cSdHvi-59PJiVVGvV-6dU"
                            alt="Example"
                        />
                    </IonCol>
                    <IonCol
                        id="about-text-column"
                        size="12"
                        size-md="8"
                        pull-md="4"
                    >
                        <div id="about-text">
                            <p id="about-title">👋 Hi! I'm Alberto,</p>
                            <p id="about-content">
                                <p>a computer scientist with a strong background in the exciting world of technology. With a degree in Computer Science (ULPGC) and a Master's degree in "Intelligent Systems and Numerical Applications" (SIANI - ULPGC), I have developed skills in the field of machine learning and robotics, where my passion lies in creating revolutionary solutions that integrate artificial intelligence with engineering to significantly transform our environment. I have had the privilege of working in dynamic and collaborative environments, which has strengthened my ability to communicate effectively and work in teams.</p>
                                <p>In addition to my technical expertise, I have a proactive approach to continuous learning and constantly updating my skills to keep up with the latest trends in the industry. Currently, I am engaged in pursuing my PhD, specializing in the Information and Communication Technology (ICT) and business field.</p>
                                <p>When I am not coding, I explore a diversity of activities that enrich my life. In addition, I find balance in sports, which not only keep me fit, but also help me recharge and stay focused. In my peaceful moments, I enjoy creative activities, which allow me to disconnect and develop my artistic side.</p>
                                <p>I eagerly look forward to the opportunity to bring my experience and passion to teams that value technical excellence and creativity in the field of computer engineering.</p>
                                <p>Feel free to say hello. I'll be excited to hear from you.</p>
                                <p>Take care and stay awesome!</p>
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

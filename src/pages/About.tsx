
import { CV_URL } from '../utils/constants';
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
                            src="/cv/assets/images/about/about.jpeg"
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
                            <a id="cv-download" target="_blank" href={CV_URL}>
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

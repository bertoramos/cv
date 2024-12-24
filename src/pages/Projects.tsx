
import { IonContent } from '@ionic/react';
import './Projects.css';
import ProjectComponent from '../components/ProjectComponent';

const Projects: React.FC = () => {
    return (
        <IonContent>
            <IonContent>
                <div className="snap-container">
                    
                    <div className="snap-section">
                        <ProjectComponent title={'Project1'} content={'project1'} image={'https://picsum.photos/800'} />
                    </div>

                    <div className="snap-section">
                        <ProjectComponent title={'Project2'} content={'project2'} image={'https://picsum.photos/800'} />
                    </div>

                    <div className="snap-section">
                        <ProjectComponent title={'Project3'} content={'project3'} image={'https://picsum.photos/800'} />
                    </div>

                    <div className="snap-section">
                        <ProjectComponent title={'Project4'} content={'project4'} image={'https://picsum.photos/800'} />
                    </div>
                    
                </div>
            </IonContent>
        </IonContent>
    );
};

export default Projects;

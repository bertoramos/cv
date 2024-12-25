
import { IonContent } from '@ionic/react';
import './Projects.css';
import ProjectComponent from '../components/ProjectComponent';
import { loremIpsum } from 'react-lorem-ipsum';
import { logoAndroid } from 'ionicons/icons';

const Projects: React.FC = () => {

    var lorem_text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laborum ipsa eveniet mollitia, ex blanditiis eius totam dignissimos aspernatur suscipit, distinctio atque? Nulla ex deleniti voluptates, quas laudantium iure tempore.';

    return (
        <IonContent color="dark">
            <div className="project-snap-container">

                <div className="project-snap-section">
                    <ProjectComponent
                        title={'Project1'}
                        description={lorem_text}
                        image={'https://picsum.photos/800'}
                        technologies={[
                            {name: "tech11", logo: logoAndroid},
                            {name: "tech12", logo: logoAndroid}
                        ]}
                    />
                </div>

                <div className="project-snap-section">
                    <ProjectComponent
                        title={'Project2'}
                        description={lorem_text}
                        image={'https://picsum.photos/800'}
                        technologies={[
                            {name: "tech21", logo: logoAndroid},
                            {name: "tech22", logo: logoAndroid}
                        ]}
                    />
                </div>

                <div className="project-snap-section">
                    <ProjectComponent
                        title={'Project3'}
                        description={lorem_text}
                        image={'https://picsum.photos/800'}
                        technologies={[
                            {name: "tech31", logo: logoAndroid},
                            {name: "tech32", logo: logoAndroid}
                        ]}
                    />
                </div>

                <div className="project-snap-section">
                    <ProjectComponent
                        title={'Project4'}
                        description={lorem_text}
                        image={'https://picsum.photos/800'}
                        technologies={[
                            {name: "tech41", logo: logoAndroid},
                            {name: "tech42", logo: logoAndroid}
                        ]}
                    />
                </div>

            </div>
        </IonContent>
    );
};

export default Projects;

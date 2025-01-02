
import { IonContent } from '@ionic/react';
import './Projects.css';
import ProjectComponent from '../components/ProjectComponent';
import { logoRss } from 'ionicons/icons';

const Projects: React.FC = () => {

    return (
        <IonContent >
            <div className="project-snap-container">
                
                <div className="project-snap-section">
                    <ProjectComponent
                        title={'Dron assisted Indoor Positioning System'}
                        description={"This work was developed in the context of Indoor Positioning Systems (IPS) based on Bluetooth Low Energy signals. IPS makes it possible to locate people or objects in environments where the reception of the Global Positioning System (GPS) signal is inaccessible or very weak, such as buildings, subway stations, etc. To implement these systems, an environment survey methodology to gather Received Signal Strength Indicators is required. Previous projects have proven that using an automated robotic platform reduces capture time and increases performance of positioning. This work is intended to use a Unmanned Aerial Vehicle (UAV) to capture data from Bluetooth Low Energy beacons. The capture will be done via an on-board mobile device and a 3D application that helps the pilot to follow a route."}
                        short_description={"Implements a drone capture system with a mobile device and a 3D application to capture Bluetooth Low Energy signals, enhancing the efficiency of Indoor Positioning Systems in GPS denied environments."}
                        url={'http://hdl.handle.net/10553/118069'}
                        image={'https://picsum.photos/800'}
                        technologies={[
                            { name: "Android", logo: logoRss },
                            { name: "Blender", logo: logoRss },
                            { name: "BLE", logo: logoRss},
                            { name: "Marvelmind", logo: logoRss},
                            { name: "Latex", logo: logoRss}
                        ]}
                    />
                </div>

                <div className="project-snap-section">
                    <ProjectComponent
                        title={'Development of a communication module in Blender for interoperation with a robotic platform.'}
                        description={"This project was developed in the context of Indoor Positioning Systems. The most used devices are Bluetooth Low Energy beacons or WiFi access points. These positioning systems require a environment survey procedure during which a radio-map is constructed by laboriously collecting Received Signal Strength Indicators. The collection of these signals is the necessary basis for correct functioning of the IPS. After an evaluation of different signal collecting methods, it was necessary to choose a robotic platform to automate the process. This work proposes the creation of a software solution that includes tools that facilitate 3D scenario design and a communication module with platform. Communication module permits design and send custom navigations plans, and a real-time tracking of a robotic platform."}
                        short_description={"This project focuses on automating signal collection for Indoor Positioning Systems using a software solution that includes 3D scenario design tools and a communication module for real-time tracking of a robotic platform."}
                        url={'http://hdl.handle.net/10553/77830'}
                        image={'https://picsum.photos/800'}
                        technologies={[
                            { name: "Python", logo: logoRss },
                            { name: "Blender", logo: logoRss },
                            { name: "Latex", logo: logoRss }
                        ]}
                    />
                </div>

            </div>
        </IonContent>
    );
};

export default Projects;

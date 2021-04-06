import React from 'react';
import './About.css';
import MyImg from '../../media/andre.jpg';

const About = () => {
    return (
        <div className="about__container">
            <div className="about__desc">
                <h3>Let me tell you something about me</h3>
                <p>
                I am an university graduate from Computer Science at UNSA
                in Arequipa, Peru. I really love to programm web apps and
                videogames. Some of my hobbies are to ride my motorcycle and
                enjoy listening to music.
                
                </p>
            </div>
            <div className="about__img">
                {/* image must be 960 x 720 */}
                <img src={MyImg} alt="about" />
            </div>
            
        </div>
    )
}

export default About

import React from 'react';
import portrait from '../../assets/images/portrait.jpg';

function AboutMe() {
    return (
        <section id='aboutme'>
            <img src={portrait} alt='Portrait of the developer' style={{ width: '200px', height: 'auto' }} />
            <p>Hello! I am a student web developer interested in building websites, applications and eventually video games. Whenever I see a well desinged website or application I think, "Hey I want to know how it works." Or "I bet I could make these colors pop more!" My hope is that some day I can take what I have learned from web development and design and apply that to a future video game.</p>
        </section>
    );
}

export default AboutMe;
import React from 'react';
import portrait from '../../assets/images/portrait.jpg';
import aboutMeRef from '../AboutMe/index.jsx';

function AboutMe() {
    return (
        <section id='aboutme' ref={aboutMeRef}>
            <img src={portrait} alt='Portrait of the developer' style={{ width: '200px', height: 'auto' }} />
            <p>
                Hello! I am Fischer Almanza, a 30-year-old living in the cozy town of Lawrence, Kansas. I graduated with a Bachelor's Degree in Art History and a Minor in Communication from the University of Kansas in 2021. My wife and I met here in this town and we call it home but some day hope to seek a new place, perhaps out East along the coastline to establish deeper roots.
            </p>
            <p>
                I am a student web developer interested in building websites, applications and eventually video games. Whenever I see a well desinged website or application I think, "Hey I want to know how it works." Or "I bet I could make these colors pop more!" My hope is that some day I can take what I have learned from web development and design and apply that to a future video game.
            </p>
            <p>
                I enjoy a nice walk with my wife and my pitty-mix Roy at the dog park or a nice trail where we can bird watch. Reading a fantasty book or a delving into the classics is another way I like to spend my time. My wife and I also enjoy volunteering at an independent senior citizen home where we lead their excercise classes. We also enjoy playing video games with our friends and family.
            </p>
        </section>
    );
}

export default AboutMe;
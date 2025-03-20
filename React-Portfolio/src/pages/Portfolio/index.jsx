import React from 'react';
import Project from '../../components/Project/index.jsx';
import ledWallImage from '../../assets/images/led_wall.avif';

function Portfolio() {
  return (
    <section id='portfolio'>
      <h2>Portfolio</h2>
      <div className='project-list'>
        <Project
          title='Led Wall'
          image={ledWallImage}
        />
        </div>
    </section>
  )
} 

export default Portfolio;

// I need to add images for my projects
// I also need to see what type of images I need
import React from 'react';
import Project from '../../components/Project/index.jsx';
import ledWallImage from '../../assets/images/led_wall.avif';
import pastelPuzzle from '../../assets/images/pastel_puzzle.avif';
import reactCalc from '../../assets/images/reac_calc.avif';
import runBuddy from '../../assets/images/run_buddy.avif';
import surfReport from '../../assets/images/surf_report.avif';

function Portfolio() {
  return (
    <section id='portfolio'>
      <h2>Portfolio</h2>
      <div className='project-list'>
        <Project
          title='Led Wall'
          image={ledWallImage}
        />
         <Project
          title='Pastel Puzzle'
          image={pastelPuzzle}
        />
         <Project
          title='React Calculator'
          image={reactCalc}
        />
        <Project
          title='Run Buddy'
          image={runBuddy}
        />
        <Project
          title='Surf Report'
          image={surfReport}
        />
        </div>
    </section>
  )
} 

export default Portfolio;

// I need to add images for my projects
// I also need to see what type of images I need
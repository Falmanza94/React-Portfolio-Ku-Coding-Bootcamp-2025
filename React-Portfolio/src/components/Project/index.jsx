import React from 'react';

function Project ({ title, image, deployedLink, repoLink }) {
    return (
        <div className='project'>
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <a href={deployedLink} target='_blank' rel="noopener noreferrer">View Project</a>
            <a href={repoLink} target='_blank' rel="noopener noreferrer">View Code</a>
        </div>
    );
}

export default Project;

// These hrefs are placeholders for the time being
// Come back to this and find a way to add projects
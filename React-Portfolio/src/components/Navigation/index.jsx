import React from 'react';
import { Link } from 'react-router-dom';

// #link is used due to this project being a single-page application - scrolling to sections on same page
function Navigation() {
    return (
        <nav>
            <ul>
                <li><Link to='/aboutme'>About Me</Link></li>
                <li><Link to='/portfolio'>Portfolio</Link></li>
                <li><Link to='/resume'>Resume</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;

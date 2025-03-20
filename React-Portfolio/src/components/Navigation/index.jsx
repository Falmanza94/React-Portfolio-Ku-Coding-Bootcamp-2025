import React from 'react';

// #link is used due to this project being a single-page application - scrolling to sections on same page
function Navigation() {
    return (
        <nav>
            <ul>
                <li><a href='#aboutme'>About Me</Link></li>
                <li><a href='#portfolio'>Portfolio</Link></li>
                <li><a href='#resume'>Resume</Link></li>
                <li><a href='#contact'>Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navigation;

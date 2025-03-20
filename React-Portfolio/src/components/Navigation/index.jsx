import React from 'react';

// #link is used due to this project being a single-page application - scrolling to sections on same page
function Navigation() {
    return (
        <nav>
            <ul>
                <li><a href='#aboutme'>About Me</a></li>
                <li><a href='#portfolio'>Portfolio</a></li>
                <li><a href='#resume'>Resume</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const aboutMeRef = React.useRef(null);
  const location = useLocation();
  const scrollToAboutMe = () => {
    if (aboutMeRef.current) {
      aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav>
      <ul>
        {location.pathname === '/' ? (
          <li><button onClick={scrollToAboutMe}>About Me</button></li>
        ) : (
          <li><Link to='/'>About Me</Link></li>
        )}
        <li><Link to='/portfolio'>Portfolio</Link></li>
        <li><Link to='/resume'>Resume</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;

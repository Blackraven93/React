import React, { useEffect, useState } from 'react';
import './styles/Nav.css';

function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    //FIXME:LintError:  @typescript-eslint/no-empty-function
    // return () => {
    //   window.removeEventListener('scroll', () => {})
    // }

    
  }, []);

  return (
    <nav className={`nav ${show && 'nav__black'}`}>
      <img
        alt="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
        className="nav__logo"
      />
      <img
        alt="User logged"
        src="https://create-react-app.dev/img/logo.svg"
        className="nav__avatar"
      />
    </nav>
  );
}

export default Nav;

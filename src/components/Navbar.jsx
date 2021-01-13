import React from 'react';
import useDarkMode from '../hooks/useDarkMode'

const Navbar = (props) => {
  const [darkToggle, setDarkToggle] = useDarkMode(props.darkMode)

  const toggleMode = e => {
    e.preventDefault();

    setDarkToggle(!darkToggle);
  };




  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkToggle ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;

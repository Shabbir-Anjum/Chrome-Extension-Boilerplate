import React from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';
import Newtab from '../Newtab/Newtab';

const Popup = () => {
  const openNewTab = () => {
    // Create a new tab when the button is clicked
    chrome.tabs.create(<Newtab/>); // Replace 'https://example.com' with the desired URL
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <button onClick={openNewTab}>button</button>
    
      </header>
    </div>
  );
};

export default Popup;

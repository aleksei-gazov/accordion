import React from 'react';

import './App.css';
import Header from 'components/Comman/header/Header';
import ControlledAccordions from 'features/accordion/Accordion';


function App() {
  return (
    <div className="App">
    <Header/>
      <ControlledAccordions/>
    </div>
  );
}

export default App;

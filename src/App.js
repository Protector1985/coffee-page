import React, {Fragment} from 'react';

import masterCSS from './master.module.css'
import Header from './components/header/Header'
import Home from './components/body/Home'
import About from './components/body/About'



function App() {
  return (
      <div className={masterCSS.container}>
        <Header />
        <About />
        {/* <Home / > */}
      </div>
      
    
    
    
  );
}

export default App;

import React, {Fragment} from 'react';

import masterCSS from './master.module.css'
import Header from './components/header/Header'
import Home from './components/body/Body'
import Footer from './components/footer/Footer'


function App() {
  return (
      <div className={masterCSS.container}>
        <Header />
        <Home />
      </div>
      
    
    
    
  );
}

export default App;

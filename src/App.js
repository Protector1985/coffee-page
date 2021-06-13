import React, {Fragment} from 'react';

import masterCSS from './master.module.css'
import Header from './components/header/Header'
import Body from './components/body/Body'
import Footer from './components/footer/Footer'


function App() {
  return (
    <Fragment>
      <div className={masterCSS.container}>
        <Header />
        <Body />
        <Footer />
      </div>
      
    </Fragment>
  );
}

export default App;

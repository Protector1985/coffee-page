import React, {Fragment} from 'react';
import {Switch, Route, BrowserRouter as Router, useLocation} from 'react-router-dom'

import masterCSS from './master.module.css'
import Header from './components/header/Header'
import Home from './components/body/Home'
import About from './components/body/About'
import CreatePlan from './components/body/CreatePlan'

//location for testing.
export const DisplayLocation = () => {
    const location = useLocation()
    console.log(location)
    return <div data-testid="location-display">{location.pathname}</div>
}


 export function App() {
  return (
    <Router basename={"https://coffee-page-8ifiq.ondigitalocean.app/"}>
        <Switch>
        <div className={masterCSS.container}>
            <Header />
            
            <Route exact path="/">
                <Home />
            </Route>
            
            <Route path="/about">
              <About />
            </Route>

            <Route path ="/plan" >
              <CreatePlan />
            </Route>
          
          </div>
        </Switch>
        {/* <DisplayLocation />  */}
    </Router>
    
      
      
    
    
    
  );
}

export default App;

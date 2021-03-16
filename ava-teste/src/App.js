import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/pages/Home';
import ActivityOne from './Components/pages/ActivityOne';
import ActivityTwo from './Components/pages/ActivityTwo';
import ActivityTree from './Components/pages/ActivityTree';
import CreateActivities from './Components/pages/CreateActivities';

function App() {
  return (
    <>
    <Router>
     <Navbar/>   
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/createActivities' component={CreateActivities}/>
        <Route path='/activityOne' component={ActivityOne}/>
        <Route path='/activityTwo'component={ActivityTwo}/>
        <Route path='/activityTree'component={ActivityTree}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;

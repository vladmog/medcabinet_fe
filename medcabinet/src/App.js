import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import {PrivateRoute} from './utils/PrivateRoute';
import Login from './components/Login';
import Dashboard from './components/Dashboard';




function App() {
  return (
    <div>
      {/* <Route path = "/reflectionlog" component = {ReflectionLog}/> */}
      <Route path = "/login" component = {Login}/>
      <PrivateRoute exact path = "/" component = {Dashboard} />
    </div>
  );
}

export default App;
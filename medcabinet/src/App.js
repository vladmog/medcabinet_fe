import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import {PrivateRoute} from './utils/PrivateRoute';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Landing from "./components/landing/Landing";




function App() {
  return (
    <div>
      {/* <Route path = "/reflectionlog" component = {ReflectionLog}/> */}
      <Route path = "/login" component = {Login}/>
      <Route exact path = "/" component = {Landing} />
      {/* <PrivateRoute exact path = "/" component = {Dashboard} /> */}
    </div>
  );
}

export default App;
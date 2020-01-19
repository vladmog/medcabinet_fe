import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import {PrivateRoute} from './utils/PrivateRoute';
import Login from './components/Login';
import Dashboard from './components/dashboard/Dashboard';
import Landing from "./components/landing/Landing";
import SaveModal from "./components/dashboard/SaveModal";
import {connect} from "react-redux";





function App(props) {
  return (
    <div>
      { props.isModalOn
        ? (
          <div>
            <SaveModal dispStrain = {props.dispStrain} />
          </div>
        )
        : (
          <div>
            {/* OFF */}
          </div>
        )
      }
      {/* <Route path = "/reflectionlog" component = {ReflectionLog}/> */}
      <Route path = "/login" component = {Login}/>
      <Route exact path = "/" component = {Landing} />
      {/* <Route exact path = "/" component = {L} /> */}
      <PrivateRoute exact path = "/dashboard" component = {Dashboard} />
    </div>
  );
}


function mapStateToProps(state){
  return {

      dispStrain: state.dispStrain,
      isModalOn: state.isModalOn
  }
}     

export default connect(mapStateToProps, {})(App);
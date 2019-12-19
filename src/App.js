import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import {BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';

import Create from './Components/create'
import Edit from './Components/edit'
import IndexCom from './Components/index'
import patientAdd from './Components/patientAdd'
import Patient from './Components/patients'
import PatientEdit from './Components/patientEdit'

import './index.css'

class App extends Component{
  render(){
    return(
      <div>
         <body>
           <Router>
     <div >
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-success shadow-sm">
          <Link className="navbar-brand">Navbar</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto ">
              
              <li className="nav-item">
                <Link to={'/'} className="nav-link">Patient Records</Link>
              </li>
              <li className="nav-item">
                <Link to={'/create'} className="nav-link">Create</Link>
              </li>
              <li className="nav-item">
                <Link to={'/index'} className="nav-link">Business List</Link>
              </li>
              
            
              <li className="nav-item">
                <Link to={'/patients'} className="nav-link">Patient</Link>
              </li>
            
            </ul>
            
          </div>
        </nav>
        </div>
<div className="sidebar">
<ul className="navbar-nav mr-auto text-white">
      
      <li className="nav-item">
        <Link to={'/'} className="nav-link">Patient Records</Link>
      </li>
      <li className="nav-item">
        <Link to={'/index'} className="nav-link">Business List</Link>
      </li>
    
      <li className="nav-item">
        <Link to={'/patients'} className="nav-link">Patient</Link>
      </li>
      
    </ul>
      </div>
      <br/>
<br/>
      <div className="content">
      <Switch>
        <Route exact path="/create" component={Create}></Route>
        <Route exact path="/index" component={IndexCom}></Route>
        <Route exact path="/edit/:id" component={Edit}></Route>
        <Route exact path="/patientAdd" component={patientAdd}></Route>
        <Route exact path="/patients" component={Patient}></Route>
        <Route exact path="/patientEdit/:id" component={PatientEdit}></Route>

      </Switch>
      </div>
     
   </Router>      
      </body>
      </div>
    );
  }
}

export default App;

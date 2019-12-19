import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import {BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';

import Create from './Components/create'
import Edit from './Components/edit'
import IndexCom from './Components/index'
import patientAdd from './Components/patientAdd'
import Patient from './Components/patients'
class App extends Component{
  render(){
    return(
   <Router>
     <div >
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link class="navbar-brand">Navbar</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      
      <li className="nav-item">
        <Link to={'/'} className="nav-link">Home</Link>
      </li>
      <li className="nav-item">
        <Link to={'/create'} className="nav-link">Create</Link>
      </li>
      <li className="nav-item">
        <Link to={'/index'} className="nav-link">Index</Link>
      </li>
      <li className="nav-item">
        <Link to={'/edit'} className="nav-link">Edit</Link>
      </li>
      <li className="nav-item">
        <Link to={'/patientAdd'} className="nav-link">Patient Add</Link>
      </li>
      <li className="nav-item">
        <Link to={'/patients'} className="nav-link">Patient</Link>
      </li>
    </ul>
    
  </div>
</nav><br/>
<br/>
<Switch>
  <Route exact path="/create" component={Create}></Route>
  <Route exact path="/index" component={IndexCom}></Route>
  <Route exact path="/edit/:id" component={Edit}></Route>
  <Route exact path="/patientAdd" component={patientAdd}></Route>
  <Route exact path="/patients" component={Patient}></Route>


</Switch>
     </div>
   </Router>
    );
  }
}

export default App;

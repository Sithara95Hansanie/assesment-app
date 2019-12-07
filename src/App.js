import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import {BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';

import Create from './Components/create'
import Edit from './Components/edit'
import IndexCom from './Components/index'

class App extends Component{
  render(){
    return(
   <Router>
     <div >
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
    </ul>
    
  </div>
</nav><br/>
<br/>
<Switch>
  <Route exact path="/create" component={Create}></Route>
  <Route exact path="/index" component={IndexCom}></Route>
  <Route exact path="/edit" component={Edit}></Route>


</Switch>
     </div>
   </Router>
    );
  }
}

export default App;

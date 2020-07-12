import React, { Component } from 'react';
import './App.css';
import {Router, Switch, Route} from 'react-router-dom';
import {Login} from './pages/login/';
import {Home} from './pages/home/';
import {history } from './_helpers';
import { PrivateRoute } from './_components';
import { Patient} from './pages/patient/patient';
import { AddPatient } from './pages/patient/add';



class App extends Component {
  render() {
     return (
         <div className="App">
             <Router history={history}>
               <div>
                   <Switch>
                      <PrivateRoute exact path='/home' component={Home} />
                      <PrivateRoute exact path='/patient' component={Patient} />
                      <PrivateRoute exact path='/add-patient' component={AddPatient} />
                      <PrivateRoute exact path='/edit-patient/:id' component={AddPatient} />
                      <Route exact path='/' component={Login} />
                   </Switch>
               </div>
             </Router>
         </div>
      );
   }
}export default App;


















// import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';

// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// import Create from './Components/create'
// import Edit from './Components/edit'

// import patientAdd from './Components/patientAdd'
// import Patient from './Components/patients'
// import PatientEdit from './Components/patientEdit'
// import MoreDetail from './Components/moredetail'

// import DoctorAdd from './Components/doctor/doctorAdd'
// import Doctor from './Components/doctor/doctor'
// import DoctorEdit from './Components/doctor/doctorEdit'
// import './index.css'

// class App extends Component {
//   render() {
//     return (
     
//         <Router>
//           <div >
//             <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-success shadow-sm">
//               <Link to={'/'} className="navbar-brand">Navbar</Link>
//               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//               </button>

//               <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav mr-auto ">


//                   <li className="nav-item">
//                     <Link to={'/'} className="nav-link">Patient </Link>
//                   </li>

//                   <li className="nav-item">
//                     <Link to={'/doctor'} className="nav-link">Doctor</Link>
//                   </li>

//                 </ul>

//               </div>
//             </nav>
//           </div>
//           <div className="sidebar">
//             <ul className="navbar-nav mr-auto text-white">

//               <li className="nav-item">
//                 <Link to={'/'} className="nav-link">Patient </Link>
//               </li>

//               <li className="nav-item">
//                 <Link to={'/doctor'} className="nav-link">Doctor</Link>
//               </li>

//             </ul>
//           </div>
//           <br />
//           <br />
//           <div className="content">
//             <Switch>
//               <Route exact path="/create" component={Create}></Route>
//               <Route exact path="/" component={Patient}></Route>
//               <Route exact path="/patient" component={Patient}></Route>
//               <Route exact path="/edit/:id" component={Edit}></Route>
//               <Route exact path="/patientAdd" component={patientAdd}></Route>
//               <Route exact path="/patients" component={Patient}></Route>
//               <Route exact path="/patientEdit/:id" component={PatientEdit}></Route>
//               <Route exact path="/moredetail/:id" component={MoreDetail}></Route>
//               <Route exact path="/doctor" component={Doctor}></Route>
//               <Route exact path="/doctorAdd" component={DoctorAdd}></Route>
//               <Route exact path="/doctorEdit/:id" component={DoctorEdit}></Route>
//             </Switch>
//           </div>

//         </Router>
      
//     );
//   }
// }

// export default App;

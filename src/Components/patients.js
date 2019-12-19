import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import PatientList from './patientList';

class Patient extends Component{
    constructor(props){
        super(props);
        this.state ={
            patient:[]
        };
    
    }
    componentDidMount(){
        axios.get('http://localhost:4000/patient')
        .then(response=>{
            this.setState({patient:response.data});
        })
        .catch(function(err){
            console.log(err)
        })
    }
    tabRow(){
        return this.state.patient.map(function(object,i){
            return <PatientList obj={object} key={i}/>;
        });
    }  
    render(){
        console.log(this.state.patient)
        return(
            <div className="container">
                <div>
                <Link to={"/patientAdd/"}  className="btn btn-primary">ADD NEW</Link>               
                </div>
                <br/>
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">F Name</th>
                            <th scope="col">L Name</th>
                            <th scope="col">Gender</th>
                            <th scope="col">NIC</th>
                            <th scope="col">DOB</th>
                            <th scope="col">Contact No</th>
                            <th scope="col">Address</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.tabRow()} 
                    </tbody>
                    
                </table>

            </div>
        )
    }
}
export default Patient;
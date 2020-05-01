import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import DoctorList from './doctorList';

class Doctor extends Component{
    constructor(props){
        super(props);
        this.state ={
            doctor:[]
        };
    
    }
    componentDidMount(){
        axios.get('http://localhost:4000/doctor')
        .then(response=>{
            this.setState({doctor:response.data});
        })
        .catch(function(err){
            console.log(err)
        })
    }
    tabRow(){
        return this.state.doctor.map(function(object,i){
            return <DoctorList obj={object} key={i}/>;
        });
    }  
    render(){
        console.log(this.state.doctor)
        return(
            <div className="container">
                <div>
                <Link to={"/doctorAdd/"}  className="btn btn-primary">ADD NEW</Link>               
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
export default Doctor;
import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

// import '../index.css';

class DoctorList extends Component{
    constructor(props){
        super(props);
        this.delete= this.delete.bind(this);
        
    }
    delete(){
        axios.get('http://localhost:4000/doctor/doctorDelete/'+this.props.obj._id)
        .then(console.log('deleted'))
        .catch(err => console.log(err));
        

    }
    render(){
        return(
                <tr>
                        <td>{this.props.obj.f_name}</td>
                        <td>{this.props.obj.l_name}</td>
                        <td>{this.props.obj.gender}</td>
                        <td>{this.props.obj.nic_no}</td>
                        <td>{this.props.obj.date_of_birth}</td>
                        <td>{this.props.obj.contact_no}</td>
                        <td>{this.props.obj.address}</td>
                        <td>
                            <Link to={"/doctorEdit/"+this.props.obj._id}  className="btn btn-success">Edit</Link>

                            <button onClick={this.delete} className="btn btn-danger">Delete</button>

                        </td>
                        

                    </tr>
        )
    }
}
export default DoctorList;
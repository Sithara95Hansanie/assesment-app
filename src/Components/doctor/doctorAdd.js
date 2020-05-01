import React,{Component} from 'react';
import axios from 'axios';

class DoctorAdd extends Component{
    constructor(props) {
        super(props);
        this.state = {
            f_name: '',
            l_name:'',
            gender:'',
            nic_no:'',
            date_of_birth:'',
            contact_no:'',
            address:''
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        // this.setState({
        //     username: event.target.value
        // });
        this.setState({ [event.target.name]: event.target.value,  });
      }
    
      handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);

        const obj ={
          f_name:this.state.f_name,
          l_name:this.state.l_name,
          gender:this.state.gender,
          nic_no:this.state.nic_no,
          date_of_birth:this.state.date_of_birth,
          contact_no:this.state.contact_no,
          address:this.state.address
        };
        axios.post('http://localhost:4000/doctor/doctorAdd',obj)
        .then(res=>console.log(res.data));
        this.setState({
          f_name:'',
          l_name:'',
          gender:'',
          nic_no:'',
          date_of_birth:'',
          contact_no:'',
          address:''
        })
        this.props.history.push('/doctor')
      }
    
  render(){
     
    return(
      <div className="container">
        <h2>Add doctor</h2> 
        <form onSubmit={this.handleSubmit}>

            <div className="row">
              <div className="col-6">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" name="f_name"value={this.state.f_name} onChange={this.handleChange} className="form-control"/>
            </div>
            <div className="form-group">
                <label>Last Name</label>
                <input type="text" name="l_name"value={this.state.l_name} onChange={this.handleChange} className="form-control"/>
            </div>
            <div className="form-group">
                <label>Gender</label>
                <input type="text" name="gender"value={this.state.gender} onChange={this.handleChange} className="form-control"/>
            </div>
            <div className="form-group">
                <label>NIC</label>
                <input type="text" name="nic_no"value={this.state.nic_no} onChange={this.handleChange} className="form-control"/>
            </div>
              </div>
              <div className="col-6">

     
              <div className="form-group">
                <label>Date of Birth</label>
                <input type="text" name="date_of_birth"value={this.state.date_of_birth} onChange={this.handleChange} className="form-control"/>
            </div>
            <div className="form-group">
                <label>Contact No</label>
                <input type="text" name="contact_no"value={this.state.contact_no} onChange={this.handleChange} className="form-control"/>
            </div>
            <div className="form-group">
                <label>Address</label>
                <input type="text" name="address"value={this.state.address} onChange={this.handleChange} className="form-control"/>
            </div>
            <div className="form-group">
                <input type="submit" className="btn btn-primary" value="Register"/>
            </div>
              </div>
            </div>
      
        </form>
      </div>
    );
  }
}

export default DoctorAdd;
import React,{Component} from 'react';
import axios from 'axios';

class DoctorEdit extends Component{
    constructor(props){
        super(props);
        this.onChangeFirstName=this.onChangeFirstName.bind(this);
        this.onChangeLastName=this.onChangeLastName.bind(this);
        this.onChangeGender=this.onChangeGender.bind(this);
        this.onChangeNIC=this.onChangeNIC.bind(this);
        this.onChangeDOB=this.onChangeDOB.bind(this);
        this.onChangeContact=this.onChangeContact.bind(this);
        this.onChangeAddress=this.onChangeAddress.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state={
            f_name: '',
            l_name:'',
            gender:'',
            nic_no:'',
            date_of_birth:'',
            contact_no:'',
            address:''
        }
    
    }
    componentDidMount(){
        axios.get('http://localhost:4000/doctor/doctorEdit/'+this.props.match.params.id)
        .then(response=>{
            this.setState({
                f_name:response.data.f_name,
                l_name:response.data.l_name,
                gender:response.data.gender,
                nic_no:response.data.nic_no,
                date_of_birth:response.data.date_of_birth,
                contact_no:response.data.contact_no,
                address:response.data.address
            });
        })
        .catch(function(error){
            console.log(error)
        })
    }
    onChangeFirstName(event){
        this.setState({f_name:event.target.value});
    }
    onChangeLastName(event){
        this.setState({l_name:event.target.value});
    }
    onChangeGender(event){
        this.setState({gender:event.target.value});
    }
    onChangeNIC(event){
        this.setState({nic_no:event.target.value});
    }
    onChangeDOB(event){
        this.setState({date_of_birth:event.target.value});
    }
    onChangeContact(event){
        this.setState({contact_no:event.target.value});
    }
    onChangeAddress(event){
        this.setState({address:event.target.value});
    }
    onSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        const obj ={
          f_name:this.state.f_name,
          l_name:this.state.l_name,
          gender:this.state.gender,
          nic_no:this.state.nic_no,
          date_of_birth:this.state.date_of_birth,
          contact_no:this.state.contact_no,
          address:this.state.address,
        };
        axios.post('http://localhost:4000/doctor/doctorUpdate/'+this.props.match.params.id,obj)
        .then(res=>
            console.log(res.data));
            this.props.history.push('/doctor');      
      }
    render(){
        return(
            <div className="container">
        <h2>Update</h2> 
        <form onSubmit={this.onSubmit}>

        <div class="row">
            <div class="col-6">
            <div className="form-group">
                <label>First Name</label>
                <input type="text" name="f_name"value={this.state.f_name} onChange={this.onChangeFirstName} className="form-control"/>
            </div>
            <div className="form-group">
                <label>Last Name</label>
                <input type="text" name="l_name"value={this.state.l_name} onChange={this.onChangeLastName} className="form-control"/>
            </div>
            <div className="form-group">
                <label>Gender</label>
                <input type="text" name="gender"value={this.state.gender} onChange={this.onChangeGender} className="form-control"/>
            </div>
            <div className="form-group">
                <label>NIC</label>
                <input type="text" name="nic_no"value={this.state.nic_no} onChange={this.onChangeNIC} className="form-control"/>
            </div>
            </div>
            <div class="col-6">
            <div className="form-group">
                <label>Date of Birth</label>
                <input type="text" name="date_of_birth"value={this.state.date_of_birth} onChange={this.onChangeDOB} className="form-control"/>
            </div>
            <div className="form-group">
                <label>Contact No</label>
                <input type="text" name="contact_no"value={this.state.contact_no} onChange={this.onChangeContact} className="form-control"/>
            </div>
            <div className="form-group">
                <label>Address</label>
                <input type="text" name="address"value={this.state.address} onChange={this.onChangeAddress} className="form-control"/>
            </div>
            <div className="form-group">
                <input type="submit" className="btn btn-primary" value="Update"/>
            </div>
            </div>
        </div>
           
          
        </form>
      </div>
        )
    }
}
export default DoctorEdit;
import React,{Component} from 'react';
import axios from 'axios';

class Create extends Component{
    constructor(props) {
        super(props);
        this.state = {
            person_name: '',
            business_name:'',
            person_nic_number:''
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
          person_name:this.state.person_name,
          business_name:this.state.business_name,
          person_nic_number:this.state.person_nic_number
        };
        axios.post('http://localhost:4000/business/add',obj)
        .then(res=>console.log(res.data));
        this.setState({
          person_name:'',
          business_name:'',
          person_nic_number:''
        })
        this.props.history.push('/index')
      }
    
  render(){
     
    return(
      <div className="container">
        <h2>Create</h2> 
        <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label>Person Name</label>
                <input type="text" name="person_name"value={this.state.person_name} onChange={this.handleChange} className="form-control"/>
            </div>
            <div className="form-group">
                <label>Business  Name</label>
                <input type="text" name="business_name"value={this.state.business_name} onChange={this.handleChange} className="form-control"/>
            </div>
            <div className="form-group">
                <label>NIC</label>
                <input type="text" name="person_nic_number"value={this.state.person_nic_number} onChange={this.handleChange} className="form-control"/>
            </div>
            <div className="form-group">
                
                <input type="submit" className="btn btn-primary" value="Register"/>
            </div>
        </form>
      </div>
    );
  }
}

export default Create;
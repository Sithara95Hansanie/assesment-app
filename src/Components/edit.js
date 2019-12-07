import React,{Component} from 'react';
import axios from 'axios';

class Edit extends Component{
    constructor(props){
        super(props);
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);


        this.state={
            person_name:'',
            business_name:'',
            person_nic_number:''
        }
    }
    componentDidMount(){
        axios.get('http://localhost:4000/edit'+this.props.match.params._id)
        .then(response=>{
            this.setState({
                person_name:response.person_name,
                business_name:response.business_name,
                person_nic_number:response.person_nic_number
            });
        })
        .catch(function(error){
            console.log(error)
        })
    }
    onChange(event) {      
        this.setState({ [event.target.name]: event.target.value,  });
      }

    onSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        const obj ={
          person_name:this.state.person_name,
          business_name:this.state.business_name,
          person_nic_number:this.state.person_nic_number
        };
        axios.post('http://localhost:4000/business/update'+this.props.match.params.id,obj)
        .then(res=>console.log(res.data));
       this.props.history.push('/index');
      }
    render(){
        return(
            <div className="container">
                 <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <label>Person Name</label>
                <input type="text" name="person_name"value={this.state.person_name} onChange={this.onChange} className="form-control"/>
            </div>
            <div className="form-group">
                <label>Business  Name</label>
                <input type="text" name="business_name"value={this.state.business_name} onChange={this.onChange} className="form-control"/>
            </div>
            <div className="form-group">
                <label>NIC</label>
                <input type="text" name="person_nic_number"value={this.state.person_nic_number} onChange={this.onChange} className="form-control"/>
            </div>
            <div className="form-group">
                
                <input type="submit" className="btn btn-primary" value="Edit"/>
            </div>
        </form>
            </div>
        )
    }
}
export default Edit;
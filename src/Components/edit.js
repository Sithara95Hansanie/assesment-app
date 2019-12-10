import React,{Component} from 'react';
import axios from 'axios';

class Edit extends Component{
    constructor(props){
        super(props);
        this.onChangePersonName=this.onChangePersonName.bind(this);
        this.onChangeBusinessName=this.onChangeBusinessName.bind(this);
        this.onChangePersonNicNum=this.onChangePersonNicNum.bind(this);
        this.onSubmit=this.onSubmit.bind(this);


        this.state={
            person_name:'',
            business_name:'',
            person_nic_number:''
        }
    }
    componentDidMount(){
        axios.get('http://localhost:4000/business/edit/'+this.props.match.params.id)
        .then(response=>{
            this.setState({
                person_name:response.data.person_name,
                business_name:response.data.business_name,
                person_nic_number:response.data.person_nic_number
            });
        })
        .catch(function(error){
            console.log(error)
        })
    }
    onChangePersonName(event){
        this.setState({person_name:event.target.value});
    }
    onChangeBusinessName(event){
        this.setState({business_name:event.target.value});
    }
    onChangePersonNicNum(event){
        this.setState({person_nic_number:event.target.value});
    }
    // onChange(event) {      
    //     this.setState({ [event.target.name]: event.target.value });
    //   }

    onSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        const obj ={
          person_name:this.state.person_name,
          business_name:this.state.business_name,
          person_nic_number:this.state.person_nic_number
        };
        axios.post('http://localhost:4000/business/update/'+this.props.match.params.id,obj)
        .then(res=>
            console.log(res.data));
            this.props.history.push('/index');      
      }
    render(){
        return(
            <div className="container">
                 <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <label>Person Name</label>
                <input type="text" value={this.state.person_name} onChange={this.onChangePersonName} className="form-control"/>
            </div>
            <div className="form-group">
                <label>Business  Name</label>
                <input type="text" value={this.state.business_name} onChange={this.onChangeBusinessName} className="form-control"/>
            </div>
            <div className="form-group">
                <label>NIC</label>
                <input type="text" value={this.state.person_nic_number} onChange={this.onChangePersonNicNum} className="form-control"/>
            </div>
            <div className="form-group">
                
                <input type="submit" className="btn btn-primary" value="Update"/>
            </div>
        </form>
            </div>
        )
    }
}
export default Edit;
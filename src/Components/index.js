import React,{Component} from 'react';
import axios from 'axios';
import TableRow from './TableRow';


class IndexCom extends Component{
    constructor(props){
        super(props);
        this.state ={
            business:[]
        };
    
    }
    componentDidMount(){
        axios.get('http://localhost:4000/business')
        .then(response=>{
            this.setState({business:response.data});
        })
        .catch(function(error){
            console.log(error)
        })
    }
    tabRow(){
        return this.state.business.map(function(object,i){
            return <TableRow obj={object} key={i}/>;
        });
    }
    render(){
        return(
            <div className="container">
                <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Person</th>
      <th scope="col">Business</th>
      <th scope="col">NIC</th>
      <th scope="col">Action</th>
      <th scope="col"></th>

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
export default IndexCom;
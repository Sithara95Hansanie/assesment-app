import React,{Component} from 'react';
import axios from 'axios';
// import {saveAs} from 'file-saver';
import html2canvas from 'html2canvas';
import jsPdf from 'jspdf';

class MoreDetail extends Component{
    constructor(props){
        super(props);
        

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
        axios.get('http://localhost:4000/patient/patientEdit/'+this.props.match.params.id)
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

printDocument() {
    const input = document.getElementById('divToPrint');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPdf();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      })
    ;
  }
    render(){
        console.log(this.state)
        return(
            <div className="container">
                <div id="divToPrint" className="row">
                <div className="col-12">
                <h2>Medical Report</h2>

                </div>
                <div className="col-md-3">
                    <p>Name:</p>
                    <p>Date of Birth:</p>
                    <p>Gender</p>
                    <p>NIC</p>
                    <p>Address:</p>
                    <p>Contact No:</p>
                </div>
                <div className="col-md-6">
                    <p>{this.state.f_name} {this.state.l_name}</p>
                    <p>{this.state.date_of_birth}</p>
                    <p>{this.state.gender}</p>
                    <p>{this.state.nic_no}</p>
                    <p>{this.state.address}</p>
                    <p>{this.state.contact_no}</p>
                </div>
                <div className="col-md-3">
                              
                </div>
              
                    
                </div>
      
        <button id="print" onClick={this.printDocument }className="btn btn-success">Download</button>
      </div>
        )
    }
}
export default MoreDetail;
const mongoose =require('mongoose');
const Schema =mongoose.Schema;

let Patient =new Schema({
    f_name:{type:String},
    l_name:{type:String},
    gender:{type:String},
    nic_no:{type:Number},
    date_of_birth:{type:Date},
    contact_no:{type:Number},
    address:{type:String}
},{
    collection:'patient'
});

module.exports=mongoose.model('Patient',Patient);

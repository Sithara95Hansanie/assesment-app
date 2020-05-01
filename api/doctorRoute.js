const express =require('express');
const doctorRoute =express.Router();

// const pdf = require(html-pdf)
let Doctor =require('./doctorModel');


doctorRoute.route('/doctorAdd').post(function(req,res){
    let doctor =new Doctor(req.body);
    doctor.save()
    .then(doctor=>{
        res.status(200).json({'doctor':'doctor is added sucessfully'});
    })
    .catch(err=>{
        res.status(400).send("unable to save database")
    });
});
doctorRoute.route('/').get(function(req,res){
    Doctor.find(function(err,doctor){
        if(err)
        console.log(err);
        else{
            res.json(doctor);
        }
    });
});
doctorRoute.route('/doctorEdit/:id').get(function(req,res){
    let id =req.params.id;
    Doctor.findById(id,function(err,doctor){
        res.json(doctor);
    });
});
doctorRoute.route('/doctorUpdate/:id').post(function(req,res){
    Doctor.findById(req.params.id,function(err,doctor){
        if(!doctor)
        res.status(400).send("data not found");
        else{
            doctor.f_name=req.body.f_name;
            doctor.l_name=req.body.l_name;
            doctor.gender=req.body.gender;
            doctor.nic_no=req.body.nic_no;
            doctor.date_of_birth=req.body.date_of_birth;
            doctor.contact_no=req.body.contact_no;
            doctor.address=req.body.address;
    
            doctor.save().then(doctor=>{
                res.json('Update complete');
                
            }).catch(err=>{
                res.status(400).send("unable to update")
            });
        }
    });
});

doctorRoute.route('/doctorDelete/:id').get(function(req,res){
    Doctor.findByIdAndRemove({_id:req.params.id},function(err,doctor){
        if(err)res.json(err);
        else res.json('Sucessfully removed');
    });
});

module.exports=doctorRoute;
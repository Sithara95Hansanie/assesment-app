const express =require('express');
const patientRoute =express.Router();

// const pdf = require(html-pdf)
let Patient =require('./patientModel');


patientRoute.route('/patientAdd').post(function(req,res){
    let patient =new Patient(req.body);
    patient.save()
    .then(patient=>{
        res.status(200).json({'patient':'patient is added sucessfully'});
    })
    .catch(err=>{
        res.status(400).send("unable to save database")
    });
});
patientRoute.route('/').get(function(req,res){
    Patient.find(function(err,patient){
        if(err)
        console.log(err);
        else{
            res.json(patient);
        }
    });
});
patientRoute.route('/patientEdit/:id').get(function(req,res){
    let id =req.params.id;
    Patient.findById(id,function(err,patient){
        res.json(patient);
    });
});
patientRoute.route('/patientUpdate/:id').post(function(req,res){
    Patient.findById(req.params.id,function(err,patient){
        if(!patient)
        res.status(400).send("data not found");
        else{
            patient.f_name=req.body.f_name;
            patient.l_name=req.body.l_name;
            patient.gender=req.body.gender;
            patient.nic_no=req.body.nic_no;
            patient.date_of_birth=req.body.date_of_birth;
            patient.contact_no=req.body.contact_no;
            patient.address=req.body.address;
    
            patient.save().then(patient=>{
                res.json('Update complete');
                
            }).catch(err=>{
                res.status(400).send("unable to update")
            });
        }
    });
});

patientRoute.route('/patientDelete/:id').get(function(req,res){
    Patient.findByIdAndRemove({_id:req.params.id},function(err,patient){
        if(err)res.json(err);
        else res.json('Sucessfully removed');
    });
});

module.exports=patientRoute;
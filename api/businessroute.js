// const express =require('express');
// const businessRoutes =express.Router();

// let Business =require('./businessmodel');

// businessRoutes.route('/add').post(function(req,res){
//     let business =new Business(req.body);
//     business.save()
//     .then(business=>{
//         res.status(200).json({'business':'business is added sucessfully'});
//     })
//     .catch(err=>{
//         res.status(400).send("unable to save database")
//     });
// });
// businessRoutes.route('/').get(function(req,res){
//     Business.find(function(err,business){
//         if(err)
//         console.log(err);
//         else{
//             res.json(business);
//         }
//     });
// });
// businessRoutes.route('/edit/:id').get(function (req, res) {
//     let id = req.params.id;
//     Business.findById(id, function (err, business){
//         res.json(business);
//     });
//   });
  
// businessRoutes.route('/update/:id').post(function(req,res){
//     Business.findById(req.params.id,function(err,business){
//         if(!business)
//         res.status(400).send("data no found");
//         else{
//             business.person_name=req.body.person_name;
//             business.business_name=req.body.business_name;
//             business.person_nic_number=req.body.person_nic_number;

//             business.save().then(business=>{
//                 res.json('Update complete');
//             }).catch(err=>{
//                 res.status(400).send("unable to update")
//             });
//         }
//     });
// });

// businessRoutes.route('/delete/:id').get(function(req,res){
//     Business.findByIdAndRemove({_id:req.params.id},function(err,business){
//         if(err)res.json(err);
//         else  res.json('Sucessfully removed');

//     });
// });

// module.exports=businessRoutes;
const express = require('express');
const Joi=require('@hapi/joi')
const router = express.Router();
const passport=require('passport')
const Doctor= require('../models/doctor');
// const Service =  require('../services/main'); 


router.post('/doctor',async (req, res) => {

const data = req.body;
    const schema=  await new Doctor({
        // price:req.body.price,
        // firstname:req.body.name,
        // lastname:req.body.name,
        // gender:req.body.name,
        // dob:req.body.name,
        // name:req.body.name,
        data:data
    });

   await schema.save()
    .then( res.status(201).json({message:"Doctor created successfully!"}))
    .catch( res.json({message:"Error creating Doctor"}))
   



});


router.get('/doctors', async (req, res) => {

    await Doctor.find()
    .lean()
   .exec()
   .then( data =>  res.send(data))
   .catch( () => {
     return  res.status(404).json({message:"No doctor found"});

   });


   

   
});

router.get('/doctor/:id',async (req, res) => {

   const id = req.params.id

  await Doctor.findById({_id:id})
   .exec()
   .then( data => {
       res.send(data)
       console.log(data)
   })
   .catch( () => {
        res.json({message:"Doctor not found"});
   })

});


router.delete('/doctor/:id',async (req, res) => {

    const id = req.params.id
 
   await Doctor.findById({_id:id})
    .exec()
    .then( () => {
        res.status(200).json({message:"Doctor deleted successfully!"});
        
    })
    .catch( () => {
         res.json({message:"patient not found"});
    })
 
 });

 router.put('/doctor/:id',async (req, res) => {

    const id = req.params.id
 
   await Doctor.findById({_id:id})
    .exec()
    .then( () => {
        res.status(200).json({message:"Patient updated successfully!"});
        
    })
    .catch( () => {
         res.json({message:"Patient not found"});
    })
 
 });

 
module.exports = router
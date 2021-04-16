const express = require('express');
const Joi=require('@hapi/joi')
const router = express.Router();
const passport=require('passport')
const Patient= require('../models/patient');
// const Service =  require('../services/main'); 


router.post('/patient',async (req, res) => {

const data = req.body;
    const schema=  await new Patient({
        // price:req.body.price,
        // firstname:req.body.name,
        // lastname:req.body.name,
        // gender:req.body.name,
        // dob:req.body.name,
        // name:req.body.name,
        data:data
    });

   await schema.save()
    .then( res.status(201).json({message:"Patient created successfully!"}))
    .catch( res.json({message:"Error creating patient"}))
   



});


router.get('/patients', async (req, res) => {

    await Patient.find()
    .lean()
   .exec()
   .then( data =>  res.send(data))
   .catch( () => {
     return  res.status(404).json({message:"No service found"});

   });


   

   
});

router.get('/patient/:id',async (req, res) => {

   const id = req.params.id

  await Patient.findById({_id:id})
   .exec()
   .then( data => {
       res.send(data)
       console.log(data)
   })
   .catch( () => {
        res.json({message:"Service not found"});
   })

});


router.delete('/patient/:id',async (req, res) => {

    const id = req.params.id
 
   await Patient.findById({_id:id})
    .exec()
    .then( () => {
        res.status(200).json({message:"Patient deleted successfully!"});
        
    })
    .catch( () => {
         res.json({message:"patient not found"});
    })
 
 });

 router.put('/patient/:id',async (req, res) => {

    const id = req.params.id
 
   await Patient.findById({_id:id})
    .exec()
    .then( () => {
        res.status(200).json({message:"Patient updated successfully!"});
        
    })
    .catch( () => {
         res.json({message:"Patient not found"});
    })
 
 });

 
module.exports = router
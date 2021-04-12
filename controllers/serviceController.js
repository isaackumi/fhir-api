const express = require('express');
const Joi=require('@hapi/joi')
const router = express.Router();
const passport=require('passport')
const Service= require('../models/services');
// const Service =  require('../services/main'); 


router.post('/service',async (req, res) => {


    const schema=  await new Service({
        price:req.body.price,
        name:req.body.name
    });

   await schema.save()
    .then( res.status(201).json({message:"Service created successfully!"}))
    .catch( res.json({message:"Error creating service"}))
   



});


router.get('/services', async (req, res) => {

    await Service.find()
    .lean()
   .exec()
   .then( data =>  res.send(data))
   .catch( () => {
     return  res.status(404).json({message:"No service found"});

   });


   

   
});

router.get('/service/:id',async (req, res) => {

   const id = req.params.id

  await Service.findById({_id:id})
   .exec()
   .then( data => {
       res.send(data)
       console.log(data)
   })
   .catch( () => {
        res.json({message:"Service not found"});
   })

});


router.delete('/service/:id',async (req, res) => {

    const id = req.params.id
 
   await Service.findById({_id:id})
    .exec()
    .then( () => {
        res.status(200).json({message:"Service deleted successfully!"});
        
    })
    .catch( () => {
         res.json({message:"Service not found"});
    })
 
 });

 router.put('/service/:id',async (req, res) => {

    const id = req.params.id
 
   await Service.findById({_id:id})
    .exec()
    .then( () => {
        res.status(200).json({message:"Service updated successfully!"});
        
    })
    .catch( () => {
         res.json({message:"Service not found"});
    })
 
 });

 
module.exports = router
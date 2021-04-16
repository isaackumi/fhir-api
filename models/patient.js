const mongoose=require('mongoose');
const bcrypt=require('bcrypt-nodejs');

const schema=mongoose.Schema({


    firstname:{
        id:mongoose.Schema.Types.ObjectId,
        type:String,
        trim:true,
        required:true
    },
    lastname:{
       
        type:String,
        trim:true,
        required:true
    },

    gender:{
       
        type:String,
        trim:true,
        required:true
    },

    dob:{
       
        type:String,
        trim:true,
        required:true
    },
    medical_history:{
       
        type:String,
        trim:true,
        
    },
    
    email:{
        type:String,
    },
    password:{
        type:String,
        trim:true
    },


    phoneNumber:{
        type:String,
        trim:true
    },

    
    createdAt: {
        type: Date,
        default:new Date()
    }



});


module.exports= mongoose.model('Patient', schema);

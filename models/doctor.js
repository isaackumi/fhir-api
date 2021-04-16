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
       
        type: String,
        enum : ['Male','Female','Prefer not to say'],
        default:"Prefer not to say"
    },

    
    patient_id:{
       
        type:Array,
        trim:true,
        ref:"Patient"
        
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


module.exports= mongoose.model('Doctor', schema);

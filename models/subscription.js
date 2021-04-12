const mongoose=require('mongoose')
// TO DO : install moment
const schema = new mongoose.Schema({


    user_id:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },

    services: [
        {
            type:mongoose.Schema.Types.ObjectId,
            default:[],
            ref:'Services'
        }
    ]
   ,
   createdAt: {
    type: Date,
    default: new Date()
  },
    expiresAt:{
        type: Date,
       default: Date.now,
       expires: 2628000
    }


   
   
    
}, {timestamps:true})




// compile schema into module
module.exports.Subscription=mongoose.model('Subscription',schema)

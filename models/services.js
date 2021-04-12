const mongoose = require('mongoose');



const schema = mongoose.Schema({


  name: {
    id: mongoose.Schema.Types.ObjectId,
    type: String,
    trim: true
  },

  price: {
    type: Number,
    trim:true
  },
  

  photo: {
    type: String
    // contentType: String

  },

  createdAt: {
    type: Date,
    default: new Date()
  }






});

module.exports= mongoose.model('Service', schema);

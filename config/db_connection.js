/* eslint-disable no-undef */
/* eslint-disable no-console */
const mongoose=require('mongoose');

 

module.exports.db_conn= mongoose.connect(`mongodb+srv://mint:mint@cluster0.imvgl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,{
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then( () => console.log('Connected to database '))
.catch((error) => console.error('Error connecting to database:  ',error)
);



/*
// MongoDB local for testing
module.exports.db_conn = mongoose.connect("mongodb://127.0.0.1:27017/booking",
   {
    useUnifiedTopology: true, 
    useNewUrlParser: true
    }) // returns a promise
.then(function(){
  console.log('connected to database');
})
.catch(function(err){
  console.log(err);
})


*/


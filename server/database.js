var mongoose=require('mongoose');
function connect(){
    mongoose.connect('mongodb://127.0.0.1:27017/name')
    // mongoose.connect('mongodb://localhost:27017/name')
    .then(res=>{
        console.log("Mongodb is connected")
    })
    .catch(err=>{
        console.log("mongodb is not connected")
    })
}
module.exports=connect;
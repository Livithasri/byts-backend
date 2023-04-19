var mongoose=require('mongoose')
var schema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    stock:String,
    status:String
})
var model=mongoose.model('products',schema)
module.exports=model
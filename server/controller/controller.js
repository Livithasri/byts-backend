const { response } = require('express')
var model=require('../model/model')
exports.create=(req,res)=>{

    var insert=new model({
        name:req.body.name,
        price:req.body.price,
        stock:req.body.stock,
        status:req.body.status
    })
    insert.save().then(res=>{
        console.log("Product created")
    }).catch(err=>{
        res.send(err)
    })
}
exports.read=(req,res)=>{
    model.find().exec()
    .then(response=>{
        res.send(response)
    })
    .catch(err=>{
        res.send(err)
    })
}
exports.update=(req,res)=>{
    model.findByIdAndUpdate(req.params.id,req.body).exec()
    .then(response=>{
        res.send(response)
    })
    .catch(err=>{
        res.send(err)
    })
}
exports.delete=(req,res)=>{
    model.findByIdAndDelete(req.params.id,req.body).exec()
    .then(response=>{
        res.send(response)
    })
    .catch(err=>{
        res.send(err)
    })
}

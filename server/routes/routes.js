var express=require("express");
var controller=require('../controller/controller')
var router=express.Router();
var axios=require('axios');
router.get('/',(req,res)=>{
    axios.get('http://localhost:3000/user')
    .then(response=>{
        res.render('index',{user:response.data})
    })
    .catch(err=>{
        console.log(err)
    })
})

// router.get('/',(req,res)=>{
//     res.render('index')
//     // res.render('index',{user:"hello user"})
// })
router.get('/adduser',(req,res)=>{
    res.render('adduser')
})
// router.get('/updateuser',(req,res)=>{
//     res.render('updateuser')
// })
router.post('/user',controller.create)
router.get('/user',controller.read)
router.put('/user/:id',controller.update)
router.delete('/user/:id',controller.delete)
module.exports=router;

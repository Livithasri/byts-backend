var express=require('express')
var morgan=require("morgan");
var dotenv=require('dotenv');
var connect=require('./server/database')
const router=require('./server/routes/routes')
const controller=require('./server/controller/controller')
var bodyparser=require("body-parser")
var path=require('path')
var app=express()
app.use(morgan('tiny'))
app.set("view engine","ejs")
// app.use('/adduser',adduser)
dotenv.config({path:"config.env"})
// app.use(dotenv({path:".\config.env"}))
app.use(bodyparser.urlencoded({extended:true}))
app.set("views",path.resolve(__dirname,'./views'))
// app.set("server",path.resolve(__dirname),'./server/routes')
app.use('/css',express.static(path.resolve(__dirname,'./assets/css')))
const PORT=process.env.PORT||3000;
// app.get('/',(req,res)=>{
//     res.render("index")
// })
// app.get('/adduser',(req,res)=>{
//     res.render("adduser");
// })
// app.get('/updateuser',(req,res)=>{
//     res.render('updateuser')
// })
connect()
app.use('/',router);
app.use('/css',express.static(path.resolve(__dirname,'assets/css')))
app.listen(PORT,()=>{
    console.log(`Server is running in ${PORT}`)
})
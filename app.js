const express = require("express");
const app  = express(); //app can use every express features
const path = require('path');
const router = express.Router();
const fs = require('fs')
const mongoose = require('mongoose')
const bodyparser = require("body-parser");
const port = 80;

//connecting to the database
mongoose.connect('mongodb://localhost/rishi', {useNewUrlParser: true, useUnifiedTopology: true});


var ContactSchema = new mongoose.Schema({
    name:String,
    phone:String,
    email:String,
    gender:String,
    dob:String,
    desc:String

});

var Contact = mongoose.model('Contact',ContactSchema);

//using EXPRESS for sending and receiveing 
app.use(express.static('public'))
app.use(express.urlencoded()); //middleware to convert html form data to express

router.get('/',(req,res)=>{
res.sendFile(path.join(__dirname,"/public/index.html"));
});



app.post('/',(req,res)=>{

    var formData = new Contact(req.body);
    formData.save().then(()=>{
        res.sendFile(thankyou.html);
    }).catch(()=>{
         res.send("Server Error!! Please Fill the Form Again")   
    })
    
});




//server start

app.listen(port,()=>{
    console.log(`Server started at port ${port}`);

});


var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var router = require("./app/routes/user")
var app = express()






// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/');
// mongoose.connection.on('connected',()=>{
//     console.log("Connected to db!");
// });
// mongoose.connection.on('error',(err)=>{
//     console.log("Got Error While Connecting To DB "+err);
// });


app.set("port", process.env.PORT || 8000)
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())
app.use("/", router)
app.use("/user", router)


app.listen(app.get("port"), (err, succ) => {
    console.log(`Server is runing on port ${app.get("port")}`)
})
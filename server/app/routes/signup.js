var express = require("express")
var router = express.Router()
var Model = require("./schema")
var mongoose = require("mongoose")
mongoose.connect("mongodb://Studant:maaz1234@ds133041.mlab.com:33041/online-tution")

router.post("/createacount", (req, res) => {
    var newUser = new Model({
        username: req.body.username,
        Email: req.body.Email,
        password: req.body.password
    })
    newUser.save((error, data) => {
    })
    res.send(req.body)

    console.log(newUser, "___________________________")
});


module.exports = router

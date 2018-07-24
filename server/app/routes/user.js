const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/user")
const PostModel = require("../models/post")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const checkAuth = require("../../middleware/check-auth")
mongoose.connect("mongodb://userdatabase:userdatabase1234@ds147411.mlab.com:47411/online-tutoin")

router.post("/refreshToken", (req, res) => {
    const token = jwt.sign({
        checkAouthToken: req.body.checkAouthToken,
    }, "RefreshKey", { expiresIn: "20m" })

    res.status(200).json({
        message: "Auth Successful",
        newToken: token
    })
})



router.post("/createPost", checkAuth, (req, res) => {
    const id = req.headers.aouthtoken
    // console.log(req.headers.aouthtoken,"======================= Linne 26")

    const newPost = new PostModel({
        _id: new mongoose.Types.ObjectId(),
        Days: req.body.Days,
        TitleVal: req.body.TitleVal,
        DiscriptionVal: req.body.DiscriptionVal,
        classType: req.body.classType,
        Recurring_status: req.body.Recurring_status,
        howManyDays: req.body.howManyDays,
        feeVal: req.body.feeVal,
        SubjectVal: req.body.SubjectVal,
        startTime: req.body.startTime,
        EndTime: req.body.EndTime,
    })
    // console.log(newPost, "========== Line 40")
    // newPost.save().then((success) => {
    //     console.log('susesss', success)
    //     res.status(201).json({
    //         message: "successfuly create Post",
    //         success
    //     })
    // }).catch((err) => {
    //     console.log('errrrrrrrrrrrrrrrr', err)
    //     res.status(500).json({
    //         error: "Faild----------------",
    //     })
    // })
})


router.post("/signup", (req, res, next) => {
    User.find({ email: req.body.email }).exec().
        then((user) => {
            if (user.length >= 1) {
                return res.status(409).json({
                    message: "Mail exists"
                })
            }
            else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        res.status(500).json({
                            error: err
                        });
                    }
                    else {
                        const user = new User({
                            _id: new mongoose.Types.ObjectId(),
                            firstName: req.body.firstName,
                            lastName: req.body.lastName,
                            email: req.body.email,
                            password: hash
                        })
                        user.save().then((success) => {
                            res.status(201).json({
                                message: "successfuly create account"
                            })
                        }).catch((err) => {
                            res.status(500).json({
                                error: "Aouthentication Faild"
                            })
                        })
                    }
                })

            }
        })
})



router.post("/login", (req, res, next) => {
    User.find({ email: req.body.email }).exec().
        then((user) => {
            if (user < 1) {
                res.status(401).json({
                    message: "Auth field"
                })
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (err) {
                    res.status(401).json({
                        userId: "Auth field"
                    })
                }
                else {
                    const result1 = result
                    const token = jwt.sign({
                        email: user[0].email,
                        password: user[0]._id,
                    }, "secretKey", { expiresIn: "60m" })

                    // const refreshToken = jwt.sign({
                    //     email: user[0].email,
                    //     password: user[0]._id,
                    // }, "RefreshToken", { expiresIn: "60m" })

                    res.status(200).json({
                        message: "Auth Successful",
                        token: token,
                    })
                    console.log("Auth Successful")
                }
                // else {
                //     res.status(401).json({
                //         message:"Auth field"
                //     })
                // }
            })
        })
        .catch((err) => {
            res.status(500).json({
                error: err
            })
        })
})

module.exports = router
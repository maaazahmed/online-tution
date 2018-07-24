var jwt = require("jsonwebtoken");



const checkAuth = (req, res, next) => {
    
    // const token = req.body.authorization.split(" ")[1];
    const token = req.body.authorization;
    console.log(token,"..................................")
    try {
        const decoded = jwt.verify(token, "secretKey", )
        req.userData = decoded;
        res.status(201).json({
            message: "My Home page",
            User: decoded
        });
        res.send(req.userData)
        next();
    }
    catch (error) {
        res.status(401).json({
            message: "Auth Faild/"
        });
    }
}

module.exports = checkAuth
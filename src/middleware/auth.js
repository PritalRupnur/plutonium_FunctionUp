
const jwt = require("jsonwebtoken");

const authenticate = function(req, res, next) {
    //check the token in request header
    //validate this token
    //console.log(req.headers)
    try{ let token = req.headers["x-Auth-token"];
   
    if (!token) token = req.headers["x-auth-token"];
  
    //If no token is present in the request header return error
    if (!token) return res.send({ status: false, msg: "token must be present" });
     req.token = token}
     catch (err) {
        //console.log("This is the error :", err.message)
        res.status(401).send({ msg: "Error", error: err.message })
      }
   
    next()
}


const authorise = function(req, res, next) {
  
  try{
    let decodedToken = jwt.verify(req.token, 'functionup-thorium')

    if(!decodedToken) return res.send({status: false, msg:"token is not valid"})
    
    //userId for which the request is made. In this case message to be posted.
    let userToBeModified = req.params.userId
    //userId for the logged-in user
    let userLoggedIn = decodedToken.userId

    //userId comparision to check if the logged-in user is requesting for their own data
    if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

  }
  catch (err) {
    //console.log("This is the error :", err.message)
    res.status(401).send({ msg: "Error", error: err.message })
  }
    next()
}
module.exports.authenticate= authenticate;
module.exports.authorise= authorise;
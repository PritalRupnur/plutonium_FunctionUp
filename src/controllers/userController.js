const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");




const createBook = async function (req, res) {
  try {
      let data = req.body
      console.log(data)
      if ( Object.keys(data).length != 0) {
          let savedData = await BookModel.create(data)
          res.status(201).send({ msg: savedData })
      }
      else res.status(400).send({ msg: "BAD REQUEST"})
  }
  catch (err) {
      console.log("This is the error :", err.message)
      res.status(500).send({ msg: "Error", error: err.message })
  }
}

// TRY CATCH SUMMARY:
// if you get an error in try block, it will not execute the next lines of code inside try
// instead it will jump into catch block and execute the code there
// code in catch block is normallly not executed
//rather catch block is only executed if there is error in try block
// the error( along with message++) gets sent to catch block incase there is an error




// Specific HTTP codes(only impt ones)
// 2xx- Success
// 4xx- something gone wrong..and problem is on user side(client side)
// 5xx- server side problems

// "BAD REQUEST" ...400..say if username password dont match etc..or anything generic( any problem in input on user side or any other unhandled problem)
// "RESOURCE NOT FOUND"...404 //404 page not found...eg. find ("asaijndianud89")...let book =bookModel.findOne({_id:"asaijndianud89"})   if (book){..} else res.status(404).send({})
// "AUTHENTICATION MISSING"...401..login is required...if(token){...} else { res.status(401)}
// "NOT AUTHENTICATED OR FORBIDDEN"..403 // if ( token.userId === userId) {...} else {res.status(403).send({}) }
// -- try catch ....// "SERVER ERROR"...500

// -- ALL GOOD... //status(200)- OK
// --- "ALL GOOD and A NEW RESOURCE WAS SUCCEFULLY CREATED" ...status(201)..e.g a new user registers herself successfully







//______________________________________________________________________________________//

const createUser = async function (abcd, xyz) {
 
  let data = abcd.body;
  let savedData = await userModel.create(data);
  
  xyz.send({ msg: savedData });
};


//______________________________________________________________________________________//

const loginUser = async function (req, res) {
  try{let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });
  
  
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "thorium",
      organisation: "FUnctionUp",
    },
    "functionup-thorium"
  );
  res.setHeader("x-auth-token", token);
  res.status(201).send({ status: true, data: token });
  }
  catch (err) {
    //console.log("This is the error :", err.message)
    res.status(501).send({ msg: "Error", error: err.message })
}
};

//______________________________________________________________________________________//

const getUserData = async function (req, res) {
  
  try{
    let userId = req.params.userId;
    console.log(req.params.userId)
   // let userID = ObjectId(userId)
    let userDetails = await userModel.findById({_id:userId});
    if (!userDetails)
      return res.send({ status: false, msg: "No such user exists" });
  
      res.status(201).send({ status: true, data: userDetails });

  }
  catch (err) {
    //console.log("This is the error :", err.message)
    res.status(501).send({ msg: "Error", error: err.message })
}
 
 
};
//______________________________________________________________________________________//

const updateUser = async function (req, res) {
try{
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData,{new:true});
  res.status(201).send({ status: updatedUser, data: updatedUser });
}
catch (err) {
  //console.log("This is the error :", err.message)
  res.status(501).send({ msg: "Error", error: err.message })
}
};


//______________________________________________________________________________________//

const postMessage = async function (req, res) {
  try{
    let message = req.body.message
    

    
    let user = await userModel.findById(req.params.userId)
    if(!user) return res.send({status: false, msg: 'No such user exists'})
    
    let updatedPosts = user.posts
    
    updatedPosts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})

  
    return res.status(201).send({status: true, data: updatedUser})
  }
  catch (err) {
    //console.log("This is the error :", err.message)
    res.status(501).send({ msg: "Error", error: err.message })
}
}
//______________________________________________________________________________//
const deletedUser = async function (req, res) {
  try{
 
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
 
  if (!user) {
    return res.send("No such user exists");
  }

 
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId },{$set:{isDeleted:true}},{new:true});
  res.send({ status: true, data: updatedUser });
}
catch (err) {
  //console.log("This is the error :", err.message)
  res.status(401).send({ msg: "Error", error: err.message })
}
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.postMessage = postMessage;
module.exports.deletedUser = deletedUser

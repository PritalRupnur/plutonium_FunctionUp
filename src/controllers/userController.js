const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");



//______________________________________________________________________________________//

const createUser = async function (abcd, xyz) {
 
  let data = abcd.body;
  let savedData = await userModel.create(data);
  
  xyz.send({ msg: savedData });
};


//______________________________________________________________________________________//

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
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
  res.send({ status: true, data: token });
};

//______________________________________________________________________________________//

const getUserData = async function (req, res) {
  
  
 
  let userId = req.params.userId;
  console.log(req.params.userId)
 // let userID = ObjectId(userId)
  let userDetails = await userModel.findById({_id:userId});
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
};
//______________________________________________________________________________________//

const updateUser = async function (req, res) {

  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData,{new:true});
  res.send({ status: updatedUser, data: updatedUser });
};


//______________________________________________________________________________________//

const postMessage = async function (req, res) {
    let message = req.body.message
    

    
    let user = await userModel.findById(req.params.userId)
    if(!user) return res.send({status: false, msg: 'No such user exists'})
    
    let updatedPosts = user.posts
    
    updatedPosts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})

  
    return res.send({status: true, data: updatedUser})
}

const deletedUser = async function (req, res) {
 
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
 
  if (!user) {
    return res.send("No such user exists");
  }

 
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId },{$set:{isDeleted:true}},{new:true});
  res.send({ status: true, data: updatedUser });
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.postMessage = postMessage;
module.exports.deletedUser = deletedUser

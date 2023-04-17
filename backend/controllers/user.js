const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { validateUser, validateLogin } = require("../models/user");
const { JWT_SECRET_KEY } = require("../constants");
const randomstring = require('randomstring');
const { validationError, sendResponse, generatePassword, isPasswordMatched, sendResetPasswordMail } = require("../utils");


// Creating User 
const createUser = async (req, res) => {
  // if there are errors , return Bad request and the errors
  const { error } = validateUser(req.body);
  if (error) {
    return sendResponse(res, "error", 422, validationError(error));
  }
  // check whether the user with same email exist already

  let user = await User.findOne({ email: req.body.email });
  
  if (user) {
    return sendResponse(res, "error", 400, "Sorry the User with this email already exist");
  }

  const secPass = await generatePassword(req.body.password);
  user = await User.create({
    name: req.body.name,
    password: secPass,
    email: req.body.email,
    employementstatus: req.body.employementstatus,
    isAdmin: req.body.isAdmin,
  });
  //unsetting user password
  user.password =undefined;
  const data = {
    user: {
      id: user.id,
    },
  };
  const authtoken = jwt.sign(data, JWT_SECRET_KEY);

  sendResponse(res, "success", 200, "User Created", user,authtoken);

};

//Logining controller
const login = async (req, res) => {
  // if there are errors , return Bad request and the errors
  const { error } = validateLogin(req.body);
  if (error) {
    return sendResponse(res, "error", 422, validationError(error));
  }

  const { email, password } = req.body;

  
  let user = await User.findOne({ email });

  if (!user) {
    return sendResponse(res, "error", 401, "Please login with correct credentials");
  }
  const passwordCompare = await isPasswordMatched(user.password, password);

  if (!passwordCompare) {
    return sendResponse(res, "error", 401, "Please login with correct credentials");
  }
  user.password = undefined;
  const data = {
    user: {
      id: user.id,
      isAdmin: user.isAdmin,
    },
  };
  const authtoken = jwt.sign(data, JWT_SECRET_KEY);

  return sendResponse(res, "success", 200, "Succesfully Logged In", user, authtoken);


};

// Update Password
const updatePassword = async (req, res) => {

  const { user_id, password } = req.body;

  const userdata = await User.findOne({ _id: user_id });

  if (userdata) {
    const newPassword = await generatePassword(password);
    const passwordCompare = await isPasswordMatched(userdata.password, password);
    if (!passwordCompare) {

      await User.findByIdAndUpdate({ _id: user_id }, { $set: { password: newPassword } })

      return sendResponse(res, "success", 200, "Password Changed Successfully");
    }
    else {
      return sendResponse(res, "failure", 400, "Choose a Different Password");
    }
  }
  else {
    return sendResponse(res, "failure", 400, "User Not Found");
  }


};
// forgot password
const forgotPassword = async (req, res) => {

  const { email } = req.body;
  const userData = await User.findOne({ email: email });
  if (userData) {
    const randomString = randomstring.generate();
    await User.updateOne({ email: email }, { $set: { token: randomString } });
    sendResetPasswordMail(userData.name, userData.email, randomString);

    return sendResponse(res, "success", 200, "Please Check you email to reset your password");

  }
  else {
    return sendResponse(res, "failure", 400, "User Associated With Email Not Found");
  }

};

const resetPassword = async(req,res)=>{
  const token = req.query.token;
  
  const tokenData = await User.findOne({token:token});
  if(tokenData){
    const newPassword = req.body.password;
    const secPassword = await generatePassword(newPassword);
    const userData = await User.findByIdAndUpdate({_id:tokenData.id},{$set:{password:secPassword,token:''}},{new:true});
    userData.password = undefined;
    return sendResponse(res, "success", 200, "Password Reset Successfull",userData);

  }
  else{
    return sendResponse(res, "failure", 400, "Link Has Expired");
  }


};
// get all invigilators user 
const getInvigilators  = async (req, res) => {

  const allInvg = await User.find({});
  sendResponse(res, "success", 200, "Got All Invigilators ", allInvg);
}


module.exports = {
  createUser,
  login,
  updatePassword,
  forgotPassword,
  resetPassword,
  getInvigilators

};

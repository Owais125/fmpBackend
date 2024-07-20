const { Users_Schema } = require("../models/Users_Model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//  signup
const signup_controller = async (req, res, next) => {

  console.log('request coming....!')
  try {
    const body = req.body;

    const salt = bcrypt.genSaltSync(10);
    const password_hash = bcrypt.hashSync(body.password, salt);

    const new_user = await Users_Schema.create({
      ...body,
      password: password_hash,
    });

    return res.json({ success: true, data: new_user });
  } catch (error) {
    return next({message: error.message || "Internal server error!" })
  }
};

//  login
const login_controller = async (req, res) => {
  try {
    const body = req.body;
    const find_user = await Users_Schema.findOne({ email: body.email });

    if (find_user === null) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials!" });
    }
    

    const compare_password = bcrypt.compareSync(
      body.password,
      find_user.password
    );

    // if(!compare_password){
    if (compare_password === false) {
      return next({status:402, message: "Invalid credentials!" });
    }

    const payload = {
      user_id: find_user._id,
    };

    const jwt_token = jwt.sign(payload,"token", {
      expiresIn: "1d",
    });

    find_user.$inc('login_count', 1)
    await find_user.save();


    

    return res.json({ success: true, message: "Loggedin Successfully!", access_token:jwt_token,userId:find_user._id });
  } catch (error) {
    return next({ message: error.message || "Internal server error!" })
  }
};

const check_auth_controller = async (req, res) => {
  try {
    
    const user = req.user;

    return res.json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error!" });
  }
};


// Exporting controller functions
module.exports = {
  signup_controller,
  login_controller,
  check_auth_controller,
};
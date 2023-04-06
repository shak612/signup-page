const User = require("../model/loginModel");

const registerUser = async (req, res) => {
  const data = new User({
    fullname: req.body.fullname,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password,
  });
  try {
    const doc = await data.save();
    res.status(201).json({ status: "ok" });
  } catch (error) {
    res
      .status(409)
      .json({ messege: error.errors, status: "Email ID is Already Exists" });
  }
};

const loginUser = async (req, res) => {
  const data = req.body;
  try {
    if (data.phone) {
      const docs = await User.findOne({
        phone: data.phone,
        password: data.password,
      });
      if (docs) res.status(201).json({ status: "ok", user: true });
      else {
        res
          .status(409)
          .json({ status: "Please Enter Valid Phone and password!!" });
      }
    } else if (data.email) {
      const docs = await User.findOne({
        email: data.email,
        password: data.password,
      });
      if (docs) res.status(201).json({ status: "ok", user: true });
      else {
        res
          .status(409)
          .json({ status: "Please Enter Valid Email and password!!" });
      }
    } else {
      res
        .status(409)
        .json({ status: "Please Enter Valid Email or Phone and password!!" });
    }
  } catch (error) {
    res.status(409).json({ messege: error.errors, status: "failed" });
  }
};

module.exports = { registerUser, loginUser };

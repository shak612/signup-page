const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: [true, "Name Must Required"],
  },
  email: {
    type: String,
    required: [true, "Email Must Required"],
    unique: true,
  },
  phone: {
    type: String,
    required: [true, "Phone No. Must Required"],
  },
  password: {
    type: String,
    required: [true, "Password Must Required"],
  },
});

const User = mongoose.model("users", userSchema);

module.exports = User;

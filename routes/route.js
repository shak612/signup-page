const express = require("express");
const { registerUser, loginUser } = require("../controller/loginController");

const router = express.Router();

router.post("/signup", registerUser);

router.post("/", loginUser);

module.exports = router;

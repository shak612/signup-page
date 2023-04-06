const mongoose = require("mongoose");

const connection = () => {
  const DB = process.env.MONGO_URL;
  mongoose
    .connect(DB)
    .then(() => {
      console.log("connection successful");
    })
    .catch((err) => console.log("no connection", err));
};

module.exports = connection;

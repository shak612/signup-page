const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const connection = require("./dbConnect");
const router = require("./routes/route");
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.static(process.env.PUBLIC_DIR));
connection();
app.use(router);

app.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}...`);
});

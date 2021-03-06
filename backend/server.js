//dotenv connection
require("dotenv").config();

//express setup
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//database connection
const database = require("./database");
database.call();

//morgan middleware
const morgan = require("morgan");
app.use(morgan("tiny"));

//cors policy issue
const cors = require("cors");
app.use(cors());

//cookie parser
const cookieParser = require("cookie-parser");
app.use(cookieParser());

//passport initialization
const passport = require("passport");
app.use(passport.initialize());

//passport cookie session
const cookieSession = require("cookie-session");
app.use(
  cookieSession({
    maxAge: 1 * 24 * 60 * 60 * 1000,
    keys: [process.env.PASSPORT_SECRET_KEY],
  })
);

//google oauth login logout and profile
const googleLogin = require("./googleLogin");
app.use("/", googleLogin);

//production
if (process.env.NODE_ENV == "production") {
  app.use(express.static("movieapp/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "movieapp", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

//listing app on PORT
app.listen(PORT, () => {
  console.log("server started...");
});

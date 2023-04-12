const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors')
//const passport = require("passport");
//const session = require("express-session");
//const MongoStore = require("connect-mongo")(session);
//const methodOverride = require("method-override");
//const flash = require("express-flash");
const logger = require("morgan");
const connectDB = require("./config/database");
const mainRoutes = require("./routes/main");

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

// Passport config
// require("./config/passport")(passport);

//Connect To Database
connectDB();

app.use(express.static("public"));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logging
app.use(logger("dev"));

app.use(cors())
  // Using method override
  //app.use(methodOverride('_method'))

// Setup Sessions - stored in MongoDB
// app.use(
//     session({
//       secret: "keyboard cat",
//       resave: false,
//       saveUninitialized: false,
//       store: new MongoStore({ mongooseConnection: mongoose.connection }),
//     })
//   );
  
  // Passport middleware
  // app.use(passport.initialize());
  // app.use(passport.session());

  //Use flash messages for errors, info, ect...
  //app.use(flash());

  app.use("/", mainRoutes);

    app.listen(process.env.PORT, () => {
    console.log("Server is running, you better catch it!");
  });
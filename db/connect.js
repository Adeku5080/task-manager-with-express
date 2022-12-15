const mongoose = require("mongoose");
require('dotenv').config()

const connectionString = process.env.MONGO_URI

mongoose
  .connect(connectionString)
  .then(() => console.log("connected to the DB"))
  .catch((err) => console.log(err));

// mongoose.connect("mongodb://localhost:27017/Tasks");

// mongoose.connection.on("error", (err) => {
//   if (err) {
//     console.log("An error occurred while connecting to MongoDB");
//   }else{
//     console.log("connected to database")
//   }

// });

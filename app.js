const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.set("view engine", "ejs");

const connectAsync = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/macroApp");
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
};

connectAsync();

app.listen(3000, () => {
  console.log("listening on port 3000");
});

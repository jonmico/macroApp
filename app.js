const express = require("express");
const mongoose = require("mongoose");
const engine = require("ejs-mate");
const app = express();
const path = require("path");

app.engine("ejs", engine);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

const Food = require("./models/food");

const connectAsync = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/macroApp");
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
};
connectAsync();

app.get("/", (req, res) => {
  res.send("this is the home page");
});

app.get("/createNewFood", async (req, res) => {
  res.render("foods/createFood");
});

app.post("/food", async (req, res) => {
  const { food } = req.body;
  const newFood = new Food(food);
  await newFood.save();
  res.send("success?");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});

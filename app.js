const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.set("view engine", "ejs");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/macs");
}

const db = mongoose.connection;

db.once("open", () => {
  console.log("connected");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});

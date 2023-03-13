const mongoose = require("mongoose");
const { Schema } = mongoose;

const foodSchema = new Schema({
  brand: String,
  name: String,
  serving: Number,
  macros: {
    fat: Number,
    carbs: {
      totalCarbs: Number,
      fiber: Number,
    },
    protein: Number,
  },
});

module.exports = new mongoose.model("Food", foodSchema);

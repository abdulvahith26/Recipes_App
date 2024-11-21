const mongoose=require('mongoose');

const recipeSchema=new mongoose.Schema({
  name: { type: String },
  ingredients: [String],
  instructions: { type: String },
  category: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports=mongoose.model('Recipe',recipeSchema,'recipes'); 
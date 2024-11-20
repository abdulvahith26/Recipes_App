const Recipe = require('../models/recipe');

const recipeControllers = {
  // Get all recipes
  getAllRecipes: async (request, response) => {
    try {
      const recipes = await Recipe.find();
      response.status(200).json(recipes);
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  },  
    
  // Get a recipe by ID
  getRecipeById: async (request, response) => {
    try {
      const { id } = request.params;
      const recipe = await Recipe.findById(id);

      if (!recipe) {
        return response.status(404).json({ message: 'Recipe not found' });
      }

      response.status(200).json(recipe);
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  },

  // Create a new recipe
  createRecipe: async (request, response) => {
    try {
      const { name, ingredients, instructions, category } = request.body;

      // Ensure required fields are provided
      if (!name || !instructions) {
        return response.status(400).json({ message: 'Name and instructions are required' });
      }

      const newRecipe = new Recipe({
        name,
        ingredients,
        instructions,
        category,
      });

      await newRecipe.save();
      response.status(201).json({ message: 'Recipe created successfully', recipe: newRecipe });
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  },

  // Update an existing recipe
  updateRecipe: async (request, response) => {
    try {
      const { id } = request.params;
      const { name, ingredients, instructions, category } = request.body;

      const recipe = await Recipe.findById(id);

      if (!recipe) {
        return response.status(404).json({ message: 'Recipe not found' });
      }

      // Update fields if provided
      if (name) recipe.name = name;
      if (ingredients) recipe.ingredients = ingredients;
      if (instructions) recipe.instructions = instructions;
      if (category) recipe.category = category;

      await recipe.save();
      response.status(200).json({ message: 'Recipe updated successfully', recipe });
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  },

  // Delete a recipe
  deleteRecipe: async (request, response) => {
    try {
      const { id } = request.params;

      const recipe = await Recipe.findByIdAndDelete(id);

      if (!recipe) {
        return response.status(404).json({ message: 'Recipe not found' });
      }

      response.status(200).json({ message: 'Recipe deleted successfully' });
    } catch (error) {
      response.status(500).json({ message: error.message });
    }
  },
};

module.exports = recipeControllers;

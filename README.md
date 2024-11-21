# Recipe API

A simple RESTful API for managing recipes, built with **Node.js**, **Express**, and **MongoDB**.

## Features
- **Create** a new recipe.
- **Read** all recipes or a specific recipe by ID.
- **Update** an existing recipe by ID.
- **Delete** a recipe by ID.

---

## Technologies Used
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **API Testing**: Postman
  
 [POST MAN Documentation]([https://example.com/api-docs](https://documenter.getpostman.com/view/39602240/2sAYBSistc))  
---
API Endpoints
1. Get All Recipes
- URL: localhost:3000/api/recipes/v1 or {{Recipes}}
- Method: GET
- Description: Fetch all recipes.
- Response Example:
```json
{
  "name": "Nandu Rasam",
  "ingredients": ["Crab", "Tamarind", "Spices"],
  "instructions": "Cook crab with spices and serve hot.",
  "category": "Soup",
  "createdAt": "2024-11-20T12:00:00.000Z"
}
```
2.Get a Recipe by ID
- URL: {{recipes}}/673ea7a4a14f99197bd2c091
- Method: GET
- Description: Fetch a specific recipe by its ID.
```json
{
  "_id": "673ea7a4a14f99197bd2c091",
  "name": "Kari Dosa",
  "ingredients": [
    "Mutton Keema",
    "Dosa Batter",
    "Onion",
    "Green Chilies",
    "Curry Leaves",
    "Spices (Turmeric, Red Chili Powder, Coriander Powder, Garam Masala)",
    "Oil"
  ],
  "instructions": "1. Heat oil in a pan and sauté onions, green chilies, and curry leaves. 2. Add mutton keema and cook with spices until well done. 3. Heat a dosa pan, spread a ladle of dosa batter, and cook lightly. 4. Add a layer of the cooked keema on top of the dosa. 5. Press gently and cook until crispy on one side. Serve hot with chutney or curry.",
  "createdAt": "2024-11-21T03:23:16.318Z",
  "__v": 0
}
```
3.Create a Recipe
- URL: 
- Method: POST
- Headers: Content-Type: application/json
- Body Example
```json
{
  "name": "Nandu Rasam (Crab Rasam)",
  "ingredients": [
    "Crab",
    "Tamarind pulp",
    "Tomatoes",
    "Onions",
    "Garlic",
    "Ginger",
    "Green chilies",
    "Coriander powder",
    "Cumin powder",
    "Rasam powder",
    "Curry leaves",
    "Mustard seeds",
    "Fenugreek seeds",
    "Turmeric powder",
    "Salt",
    "Coriander leaves (for garnish)"
  ],
  "instructions": "1. Clean and break the crab into pieces. 2. Cook crab in water with turmeric powder and salt. 3. Heat oil, add mustard seeds, fenugreek seeds, and curry leaves. 4. Add chopped onions, tomatoes, ginger, garlic, and green chilies. 5. Add tamarind pulp, rasam powder, coriander powder, cumin powder, and cooked crab. 6. Add water and bring to a boil. 7. Cook until flavors are well blended. 8. Garnish with coriander leaves. Serve hot with rice.",
  "category": "Soup"
}
```
4.Update a Recipe
- URL: {{recipes}}/673ea7a4a14f99197bd2c091
- Method: PUT
- Headers: Content-Type: application/json
```json
{

  "category": "Lunch/Dinner"
}
```
resopnse
```json
{
  "message": "Recipe updated successfully",
  "recipe": {
    "_id": "673ea7a4a14f99197bd2c091",
    "name": "Kari Dosa",
    "ingredients": [
      "Mutton Keema",
      "Dosa Batter",
      "Onion",
      "Green Chilies",
      "Curry Leaves",
      "Spices (Turmeric, Red Chili Powder, Coriander Powder, Garam Masala)",
      "Oil"
    ],
    "instructions": "1. Heat oil in a pan and sauté onions, green chilies, and curry leaves. 2. Add mutton keema and cook with spices until well done. 3. Heat a dosa pan, spread a ladle of dosa batter, and cook lightly. 4. Add a layer of the cooked keema on top of the dosa. 5. Press gently and cook until crispy on one side. Serve hot with chutney or curry.",
    "createdAt": "2024-11-21T03:23:16.318Z",
    "__v": 0,
    "category": "Lunch/Dinner"
  }
}
```
5.Delete a Recipe
- URL: {{recipes}}/673eb4ef3c1e4fdc756f713d
- Method: DELETE
- Response Example after delete the ID:
```json
{
  "message": "Recipe deleted successfully"
}
```


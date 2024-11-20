const express = require('express');
const app = express();
const recipeRouter = require('./routes/recipeRoutes'); 

// in bld express Middleware
app.use(express.json());

// API Routes
app.use('/api/v1/recipes', recipeRouter);

// response frm the server, if client connect to the server 
app.get('/', (req, res) => {
    res.send('Welcome to the Recipe API! Use /api/v1/recipes for accessing recipes.');
});

module.exports = app;
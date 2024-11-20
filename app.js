const express = require('express');
const app = express();
const recipeRouter = require('./routes/recipeRoutes'); 

// in bld express Middleware
app.use(express.json());

// API Routes
app.use('/api/recipes/v1', recipeRouter);

// response frm the server, if client connect to the server 
app.get('/', (req, res) => {
    res.json(" use the end point '/api/v1/recipes' to connect the DB " );
});

module.exports = app;
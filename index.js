const mongoose = require('mongoose');
const app = require('./app');
const express = require('express')
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

if (!MONGO_URL) {
    console.error('Error: MONGO_URI is not defined in the .env file');
    process.exit(1); // Exit if MONGO_URI is missing
}
app.use(express.json());
mongoose.connect(MONGO_URL)
    .then(() => {
        console.log("Connected to the database!");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Database connection failed!', error.message);
        process.exit(1); // Exit the process if DB connection fails
    });
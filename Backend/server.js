const express = require('express');
const app = express();

const connectDB = require('./dbConnect')
const Ticket = require('./schema');

connectDB()

app.listen(8080, () => {
    console.log("Server is running on port 8080");
})
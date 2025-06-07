const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./dbConnect');
const bookingRoutes = require('./routes')

app.use(cors());
app.use(express.json());

connectDB()

app.use("/api", bookingRoutes);

app.listen(8080, () => {
    console.log("Server is running on port 8080");
})
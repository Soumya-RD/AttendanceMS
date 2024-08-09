const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/users');


const app = express();
const port = 3026;
const mongoUrl = "mongodb://localhost:27017/register";

mongoose.connect(mongoUrl)
    .then(() => console.log("Database conected"))
    .catch(err => console.log("Database connection error", err))


app.use(express.json());
app.use('/master', userRoute);
app.listen(port, () => console.log(`Server running on the port ${port}`));


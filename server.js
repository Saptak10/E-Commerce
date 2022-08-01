if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require('express')
const path = require('path')
const dotenv = require('dotenv')

const dbConnection = require('./config/dbConnection');
const errorHandler = require('./middleware/errorMidlleware')
const userRoute = require('./route/userRoutes');

const app = express();

dbConnection();

app.use(express.json())
app.use(express.urlencoded({ extended : true }))

app.use('/', userRoute)

app.use(errorHandler)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening at port ${port}`));
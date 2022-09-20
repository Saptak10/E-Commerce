if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const { graphqlHTTP } = require('express-graphql');

const dbConnection = require('./config/dbConnection');
const errorHandler = require('./middleware/errorMiddleware')

const userRoute = require('./route/userRoutes');
const productRoute = require('./route/productRoutes');

const schema = require('./schema/schema.js');

const app = express();

dbConnection();

app.use(express.json())
app.use(express.urlencoded({ extended : true }))

app.use('/graphql', 
    graphqlHTTP({
    schema,
    graphiql : process.env.NODE_ENV === 'development',
}));

app.use('/', userRoute)
// app.use('/', (req, res) => {
//     res.send('API is running...')
// })
app.use('/api/products', productRoute)

app.use(errorHandler)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening at port http://localhost:${port}/`));
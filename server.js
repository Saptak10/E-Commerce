const path = require('path');
const express = require('express');
const dotenv = require('dotenv').config();;
const { graphqlHTTP } = require('express-graphql');

const dbConnection = require('./config/dbConnection');
const errorHandler = require('./middleware/errorMiddleware')

const userRoute = require('./route/userRoutes');
const productRoute = require('./route/productRoutes');

const schema = require('./schema/schema.js');

const app = express();

const cors = require('cors');

dbConnection();

app.use(express.json())
app.use(express.urlencoded({ extended : true }))
app.use(cors());

app.use('/graphql', 
    graphqlHTTP({
    schema,
    graphiql : process.env.NODE_ENV === 'development',
}));

app.use('/', userRoute)
app.use('/', (req, res) => {
    res.send('Backend API Server is running...')
})
app.use('/api/products', productRoute)

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, './client/build')));

    app.get('*', (req, res) =>
    res.sendFile(
    path.resolve(__dirname, './', 'client', 'build', 'index.html')
    )
    );
} else {
    app.get('/', (req, res) => res.send('Please set to production'));
}

app.use(errorHandler)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening at port http://localhost:${port}/`));
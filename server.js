const path = require('path');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const colors = require('colors')

const dbConnection = require('./config/dbConnection');
const errorHandler = require('./middleware/errorMiddleware')

const userRoute = require('./route/userRoutes');
const productRoute = require('./route/productRoutes');

// import orderRoutes from './routes/orderRoutes.js'
// import uploadRoutes from './routes/uploadRoutes.js'

const schema = require('./schema/schema.js');

const app = express();

if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

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

// app.use('/', (req, res) => {
//     res.send('Backend API Server is running...')
// })
app.use('/', userRoute)
app.use('/products', productRoute)


app.use(errorHandler)

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Listening at port http://localhost:${port}/`.yellow.bold));
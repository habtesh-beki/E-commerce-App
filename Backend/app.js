const express = require('express');
const morgan = require('morgan')
////////////////////
const userRoute = require('./Routes/userRoute')
const productRoute = require('./Routes/productRoute')
const orderRoute = require('./Routes/orderRoute')

const app = express();
// app.use(morgan)
app.use(express.json());

app.use('/api/users', userRoute)
app.use('/api/products', productRoute)
app.use('/api/orders', orderRoute)


module.exports = app
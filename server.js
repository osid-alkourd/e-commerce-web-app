const express = require('express');
const dotenv = require('dotenv')
const morgan = require('morgan')
const mongoose = require('mongoose')
dotenv.config({ path: 'config.env' })
const dbConnection = require('./config/db')
const categoryRouter = require('./routers/categoryRouter')
// db connection
dbConnection()

// express app
const app = express()

// middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
  console.log(`the mode is ${process.env.NODE_ENV}`)
}

// mount route
app.use('/api/v1/categories' , categoryRouter)


const PORT = process.env.PORT || 8000;
app.listen(8000, () => {
  console.log(`the port is ${PORT}`);
})
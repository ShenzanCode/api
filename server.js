const express = require('express')
const { getallProucts } = require('./controller/product')
const { ConnneectDb } = require('./db/connect')
require('dotenv').config()
const app = express()
//middleware for api routes

app.use('/api/products', getallProucts)

const port= process.env.PORT || 3000
ConnneectDb()

app.listen(3000,()=>{
    console.log(`Server is running on port ${port}`)
})
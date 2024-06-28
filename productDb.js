require('dotenv').config()
const {ConnneectDb}=require('./db/connect')
const productJson= require('./product.json')
const product = require('./models/product')

const start= async()=>{
    try {
        await ConnneectDb(process.env.MONGOOSE)
        await product.deleteMany()
        await product.create(productJson)
        console.log('create product successfully')
    } catch (error) {
        console.log(error,'this is an error')
    }
}

start()
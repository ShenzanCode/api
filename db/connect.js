const mongoose = require('mongoose');

const ConnneectDb= ()=>{
    try {
        mongoose.connect(process.env.MONGOOSE, { useNewUrlParser: true, useUnifiedTopology: true }),
        console.log('connected to db')
        
    } catch (error) {
        console.log(error)
    }
}
module.exports={ConnneectDb}

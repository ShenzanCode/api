const mongoose= require('mongoose');

const productSchema= new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'please enter name of product.']
    },
    price:{
        type: Number,
        required: [true, 'price must be provide']
    },
    featured:{
        type: Boolean,
        default: false
    },
    rating:{
        type: Number,
        default: 0
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    company:{
        type:String,
        enum:{
            values:['Apple','Samsung','Nokia','Google','hp'],
            message: 'Company must be Apple, Samsung, google, hp or Nokia'
        }
        }
})

module.exports = mongoose.model('Product',productSchema)
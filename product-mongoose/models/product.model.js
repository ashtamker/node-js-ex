const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: false,
        unique: false,
    },
    productCategory: {
        type: String,
        required: true,
    },

    isActive: {
        type: Boolean,
        required: false,
        unique: false,
        default : true
    },
    details: [
        { description: {
            type: String,
            required: false,
            minLength:10,
        }
    },
    {
        price: { 
         type: Number,
         required: false,
         validate(value)  {
            if(value < 0){
                throw new Error('Invalid price');
            }
         } 
        }
    }
]
})

const roommodel  = mongoose.model('product',productSchema);
module.exports= roommodel;
// module.exports = mongoose.model('rooms',roomSchema);



// type: Date,
// required: false,
// unique: false,
// default : Date.now()
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
   details: {
       description:{
           type: String,
           required: true,
           unique: false,
       },
       price: {
           type: Number,
           required: true,
           unique: false,
           validate(value){
               if(value < 0){
                   throw new Error('Invalid Price')
               }
           }
        },
        phone: {
            type: Number,
            minlength: 10,
            maxlength: 10,
            required: true,
        },
        data: {
            type: Date,
            required: false,
            unique: false,
            default: Date.now(),
        },

   },

})

const productmodel  = mongoose.model('product', productSchema);
module.exports= productmodel;
// module.exports = mongoose.model('rooms',roomSchema);


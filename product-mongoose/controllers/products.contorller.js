const productModel = require('../models/product.model');


const createProduct = (req, res) => {
    // const data = req.body;
    const {productName, productCategory, description, price} = req.body;
    const product = new productModel({
        productName: productName,
        productCategory: productCategory,
        details: {
            description: description,
            price: price,

        }
        
    });
    product.save((err) => {
        if (err) return res.json({"error": err})
        return res.json({"success": product})
    });


}

const getProduct = (req, res) => {
    productModel.find({}).then((product) => {
        return res.send(product)
    });
}

module.exports = {
    create: createProduct,
    getAll: getProduct
}

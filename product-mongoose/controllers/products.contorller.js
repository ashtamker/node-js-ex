const productModel = require('../models/product.model');


const createProduct = (req, res) => {
    // const data = req.body;
    const {productName, productCategory, details} = req.body;
    const product = new productModel({
        productName: productName,
        productCategory: productCategory,
        details: details,
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

const getByName = (req, res) => {
    const {name} = req.params;
    productModel.findById(name, (err, res) => {
        if(err){
            return res.json({err})
        }
        if(!res){
            return res.send("No product with this name")
        }
        res.json({res})
  });
}

module.exports = {
    create: createProduct,
    getAll: getProduct,
    getByName: getByName,
}

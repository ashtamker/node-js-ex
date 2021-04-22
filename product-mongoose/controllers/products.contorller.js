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
// async version
const createProductAsync = async (req, res) => {
    const {productName, productCategory, details} = req.body;
    const product = new productModel({
        productName: productName,
        productCategory: productCategory,
        details: details,
        });
        try {
            const data = await product.save()
            res.send(data) 
        }
        catch (err) {
            return res.json({"error": err})
        }
       
    };

const getProductAsync = async (req, res) => {
    try {
        const allProduct =  await productModel.find({});
        res.send(allProduct);
    }
    catch (err) {
        res.send(err);
    }
    };

const getByNameAsync = async (req, res) => {
        const {name} = req.params;
        try{
            const oneProduct = await productModel.findById(name)
            res.send(oneProduct);
        }
        catch (err) {
            res.send(err)
        }
    };

    const update = async (req, res) => {
        const {id} = req.params
        const {isActive} = req.body
        try {
            const product = await productModel.findByIdAndUpdate(id, {isActive})
            if (!product) {
                return res.status(404).send("Wrong id product")
            }
            res.send(product)
        } 
        catch (err) {
            res.status(400).send(err)
        }
    }
    const deleteProduct = async (req, res) => {
        const {id} = req.params
        try {
            const product = await productModel.findByIdAndDelete({id})
            if (!product) {
                res.status(404).send("Wrong id product")
            }
            res.send(product)
        } 
        catch (err) {
            res.status(500).send()
        }
    }




module.exports = {
    create: createProduct,
    getAll: getProduct,
    getByName: getByName,
    createProductAsync,
    getProductAsync,
    getByNameAsync,
    update,
    deleteProduct,
}



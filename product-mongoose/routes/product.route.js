const express = require('express');
const router = express.Router();
const productsControler = require('../controllers/products.contorller');


router.get('/',(req,res)=>{
   productsControler.getAll(req,res);
}).post('/',(req,res)=>{
   productsControler.create(req,res);
})
.get("/:id", productsControler.getByName)
.put('/:id', productsControler.update)
.delete('/:id', productsControler.deleteProduct)





module.exports = router;



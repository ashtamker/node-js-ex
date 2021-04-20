const productModel = require('../models/product.model');


const createProduct = (req, res) => {
    // const data = req.body;
    const {roomName, roomNumber, floor} = req.body;
    if (roomNumber < 0) {
        return res.json({"error": "asfsaf"})
    }
    const product = new productModel({
        roomName: roomName,
        roomNumber: roomNumber,
        floor: floor,
    });
    room.save((err) => {
        if (err) return res.json({"error": err})
        return res.json({"success": room})
    });


}

const getProduct = (req, res) => {
    productModel.find({}).then((rooms) => {
        return res.send(rooms)
    });
}

module.exports = {
    create: createProduct,
    getAll: getProduct
}

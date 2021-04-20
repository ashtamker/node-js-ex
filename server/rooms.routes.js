const express = require('express');
const router = express.Router();

const room = [
    {
        roomNum: 1,
        cap: 4,
        isActive: false
    },
]

router.get('/',(req,res)=>{
    return res.status(200).json({room: room})
}).post('/',(req,res) => {
    room.push({
        roomNum: room.length + 1,
        cap: req.body.cap,
        isActive: true
    })
    return res.send(req.body)

}).post('/',(req,res)=>{
    const {roomNum, id} = req.body
    room[roomNum].worker = id;
})

module.exports = router;
const express = require('express');
const router = express.Router();
const workerJson = require('./worker.json');
const worker = [
    {
        id: 0,
        name: "Sergio Ramos",
        isActive: false
    },
    {
        id: 1,
        name: "Toni Kroos",
        isActive: false
    },
    {
        id: 2,
        name: "Luka Mudrich",
        isActive: false
    }
]

router.get('/',(req,res)=>{
    return res.status(200).json({workerJson: workerJson})
}).get('/:id',(req,res)=>{
    return res.status(200).json({workerJson : workerJson[req.params.id]})
}).post('/',(req,res)=>{
    user.push({
        id: req.body.id,
        name: req.body.name,
        capsule: req.body.capsule
    })
    return res.send(req.body)
}).put('/:id',(req, res)=>{
    const {id} = req.params;
    const {} = req.body;
    user[id].capsule = capsule
    res.send(yes)
       
})

module.exports = router;
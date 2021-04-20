const express = require('express');
const router = express.Router();
const workerJson = require('./worker.json');
const workers = workerJson.workers;
const worker = [
    {
        id: 0,
        name: "Sergio Ramos",
        isActive: false
    },
    {
        id: 1,
        name: "Toni Kroos",
        isActive: true
    },
    {
        id: 2,
        name: "Federico Valverde",
        isActive: true
    },
    {
        id: 3,
        name: "Luka Modric",
        isActive: true
    }
]

router.get('/',(req,res)=>{
    return res.status(200).json({workerJson: workerJson})
}).get('/:id',(req,res)=>{
    return res.status(200)({worker : worker.map(id => worker[id])})
}).post('/',(req,res)=>{
    if(!req.body.name)
    {
        return res.status(204).json({error: 'enter name'})
    }
    // let res = worker.find((i) => {
    //     return i.id == id
    // })
    // else if(res){
    //     return res.status(204).json({error: 'worker exist in db'})
    // }
    
    workers.push({
        id: worker.length,
        name: req.body.name,
        isActive: false
    })
    return res.send(req.body)
})
// .put('/:id',(req, res)=>{
//     const {id} = req.params;
//     const {} = req.body;
//     user[id].isActive = false
//     res.send(yes)
       
// })

module.exports = router;
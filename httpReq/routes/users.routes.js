const express = require('express');
const router = express.Router();
const usersJson = require('../users.json');
const user = [
    {
        id: 0,
        name: "Or",
        capsule:1
    },
    {
        id: 1,
        name: "Sergi",
        capsule: 1
    },
    {
        id: 2,
        name: "Dima",
        capsule: 4
    }
]

router.get('/',(req,res)=>{
    return res.status(200).json({users : user})
}).get('/:id',(req,res)=>{
    return res.status(200).json({user : user[req.params.id]})
}).post('/',(req,res)=>{
    user.push({
        id: req.body.id,
        name: req.body.name,
        capsule: req.body.capsule
    })
    return res.send(req.body)
}).put('/:id',(req, res)=>{
    const {id} = req.params;
    const {capsule} = req.body;
    user[id].capsule = capsule
    res.send(yes)
       
})

module.exports = router;

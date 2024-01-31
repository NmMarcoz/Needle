const  express = require('express')
const {Costumer, Request} = require('../models')

const get = async(req,res) =>{
    const costumers = await Costumer.findAll({include: Request});
    if(!costumers){
        return res.status(500).send({message: "There is no costumers"})
    }
    return res.status(200).send([
        {message: "Costumers!"},
        {costumers}
    ])
}

const create = async(req, res) =>{
    const costumer = req.body
    if(!costumer){
        return res.status(400).send({
            message: "Blank"
        })
    }
    const {name, email, phoneNumber} = costumer
    if(!name || !email || !phoneNumber){
        return res.status(500).send({
            message: "All camps are obrigatory"
        })
    }
    await Costumer.create(costumer)
    return res.status(200).send([
        {message: "Costumer registered succesfully"},
        {costumer}
    ])
}

module.exports={
    get,
    create
}
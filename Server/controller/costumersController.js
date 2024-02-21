const  express = require('express')
const {Costumer, Request} = require('../models')

const get = async(req,res) =>{
    try{
        const costumers = await Costumer.findAll({include: Request});
        if(!costumers){
            return res.status(500).send({message: "There is no costumers"})
        }
        return res.status(200).send([
            {message: "Costumers!"},
            {costumers}
        ])
    }catch(err){
        console.log(err.message)
        return res.status(400).send({message: err.message})
    }
   
}

const create = async(req, res) =>{
    try{
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
        console.log("Costumer created!")
        return res.status(200).send([
            {message: "Costumer registered succesfully"},
            {costumer}
        ])
    }catch(err){
        console.log(err.message)
        return res.status(400).send({message: err.message})
    }
}

module.exports={
    get,
    create
}
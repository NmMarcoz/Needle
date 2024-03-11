const express = require('express')

const {Request} = require("../models")

const get  = async(req,res) =>{
    const requests = await Request.findAll();
    if(!request){
    return res.status(400).send({
        message:"There are no requests"

        })
    }
    return res.status(200).send([
        {message:"Requests!"},
        {requests}
    ])
    
}
const create = async(req,res) =>{
    try{
        const request = req.body
        console.log(request)
        const{requestName, requestDescription, requestValue, requestDeadline, costumerId} = request
        
        if(!requestName || !requestDescription || !requestDeadline || !requestValue|| !costumerId){
            return res.status(400).send({message:"All camps obrigatory"})
        }
        await Request.create(request)
        return res.status(200).send(
            [
                {message:"Request registered!"},
                {request}
            ])
    }catch(erro){
        console.log(error.message)
        return res.status(500).send({message:error.message})
    }
    
    
  
}

module.exports={
    get,
    create
}
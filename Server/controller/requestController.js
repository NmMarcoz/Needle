const express = require("express");

const { Request } = require("../models");

const get = async (req, res) => {
  const requests = await Request.findAll();
  if (!requests) {
    return res.status(400).send({
      message: "There are no requests",
    });
  }
  return res.status(200).send([{ message: "Requests!" , requests: requests }]);
};
const create = async (req, res) => {
  try {
    const request = req.body;
    console.log(request);
    const {
      requestName,
      requestDescription,
      requestDeadline,
      costumerId,
    } = request;

    if (!requestName || !requestDeadline || !costumerId) {
        console.log( "The following camps are obrigatory: requestName, requestDeadline, requestID")
        return res.status(400).send({
        message:
          "The following camps are obrigatory: requestName, requestDeadline, requestID",
      });
    }
    await Request.create(request);
    return res
      .status(200)
      .send([{ message: "Request registered!" }, { request }]);
  } catch (erro) {
    console.log(erro.message);
    return res.status(500).send({ message: erro.message });
  }
};

module.exports = {
  get,
  create,
};

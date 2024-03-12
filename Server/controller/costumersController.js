const express = require("express");
const { Costumer, Request } = require("../models");
const { where } = require("sequelize");
const get = async (req, res) => {
  try {
    const costumers = await Costumer.findAll({ include: Request });
    if (!costumers) {
      return res.status(500).send({ message: "There is no costumers" });
    }
    return res.status(200).send([{ message: "Costumers!" }, { costumers }]);
  } catch (err) {
    console.log(err.message);
    return res.status(400).send({ message: err.message });
  }
};
const getByEmail = async (req, res) => {
  try {
    const email = req.body.email;
    if (!email) {
      return res.status(400).send({
        message: "Send an email please / Digite um  email por favor.",
      });
    }
    const user = await Costumer.findOne({ where: { email: email } });
    if (!user) {
      return res.status(404).send({
        message:
          "There are no users with this email / Não tem usuários com esse email",
      });
    }
    return res.status(200).send({ message: "Here is your user!", user: user });
  } catch (erro) {
    return res.status(500).send({ message: erro.message });
  }
};
const create = async (req, res) => {
  try {
    const costumer = req.body;
    if (!costumer) {
      return res.status(400).send({
        message: "Blank",
      });
    }
    const { name, email, phoneNumber } = costumer;
    if (!email) {
      return res
        .status(400)
        .send({ message: "Email obrigatory. / Email obrigatório." });
    }
    if (!name || !phoneNumber) {
      return res.status(400).send({
        message: "All camps are obrigatory / Todos os campos são obrigatórios",
      });
    }
    await Costumer.create(costumer);
    //console.log("Costumer created!");
    return res
      .status(201)
      .send([
        { message: "Costumer registered succesfully", costumer: costumer },
      ]);
  } catch (err) {
    console.log(err.message);
    return res.status(400).send({ message: err.message });
  }
};
const updateUser = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).send({
        message:
          "Submit at least one field / Mande pelo menos um campo preenchido",
      });
    }
    const { name, email, phoneNumber } = req.body;
    const user = await Costumer.findOne({ where: { email: email } });
    if (!user) {
      return res.status(404).send({ message: "user not found" });
    }
    await user.update({ name: name, phoneNumber: phoneNumber });
    return res.status(200).send({ message: "user updated", user: user });
  } catch (erro) {
    res.status(500).send({ message: erro.message });
  }
};

module.exports = {
  get,
  create,
  getByEmail,
  updateUser,
};

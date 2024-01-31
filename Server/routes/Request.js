const express = require('express')
const router = express.Router();

const requestController = require('../controller/requestController')

router.get("/", requestController.get)

router.post("/", requestController.create)

module.exports = router
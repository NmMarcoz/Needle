const express = require('express')
const router = express.Router();
const costumersController = require('../controller/costumersController')



router.get("/", costumersController.get)
router.get("/email", costumersController.getByEmail)

router.post("/", costumersController.create)


module.exports = router
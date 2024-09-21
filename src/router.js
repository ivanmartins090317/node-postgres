const express = require('express')
const productController = require("./controller")

const router = express.Router()

router.get('/products', productController.index)

module.exports = router

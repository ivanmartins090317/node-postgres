const express = require('express')
const productController = require("./controller")

const router = express.Router()

router.get('/products', productController.index)
router.post('/products', productController.create)
router.get('/products/:id', productController.show)
router.put('/products/:id', productController.update)
router.delete('/products/:id', productController.delete)

module.exports = router

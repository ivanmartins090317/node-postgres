const  {ProductModel} = require('../models/product-query')

const productController = {
 index:async (req, res) =>{
  const productAll = await ProductModel.findAll()
  res.json(productAll)
 },
 create: async (req, res) =>{
  const newProduct  = await ProductModel.create(req.body)
  res.status(201).json(newProduct)
 },
 show: async (req, res) =>{
  const productOne = await ProductModel.findById(req.params.id)
  if(productOne === null) return res.send(404).json({message: 'Product not found'})
  res.json(productOne)
 },
 update: async (req, res) =>{
  const product = await ProductModel.update(req.params.id, req.body)
  if(product === null) return res.send(404).json({message: 'Product not found'})
  res.json(product)
 },
 delete: async (req, res) =>{
  const product = await ProductModel.delete(req.params.id)
  res.json({message: 'Product deleted successfully'})
 }
}

module.exports = productController
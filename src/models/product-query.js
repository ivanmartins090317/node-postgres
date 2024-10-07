const {query} = require('../database')

class ProductModel {
  constructor(productRow){
   this.id = productRow.id
   this.name = productRow.name
   this.description = productRow.description
   this.price = productRow.price
   this.stock_quantity = productRow.stockQuantity
   this.is_active = productRow.isActive
  }
 //GET ALL PRODUCTS
  static async findAll(){
    const result = await query(`SELECT * FROM products;`)
    const product = result.rows.map(row => new ProductModel(row)) 
    return product
  }
  // CREATE NEW PRODUCTS
  static async create({name, description, price, stockQuantity, isActive}){
    const result = await query(`INSERT INTO products (name, description, price, stock_quantity, is_active)
      VALUES($1, $2, $3, $4, $5)
      RETURNING *`,
      [name, description, price, stockQuantity, isActive]
    )
    return new ProductModel(result.rows[0])
  }
  // FIND FOR ID
  static async findById(id){
    const result = await query(`SELECT FROM products WHERE id = $1`, [id])
    if(!result.rows[0]) return null
    return new ProductModel(result.rows[0])
  }
  //  UPDATE PRODUCT
   static async update(id, attributes) {
    const { rows } = await query(`SELECT * FROM products WHERE id = $1`, [id])
    if (!rows[0]) return null
  
    const product = new Product(rows[0])

    Object.assign(product, attributes)
    product.updatedAt = new Date()

    await query(
      `UPDATE products SET
        name = $1,
        description = $2,
        price = $3,
        stock_quantity = $4,
        is_active = $5,
        updated_at = CURRENT_TIMESTAMP
      WHERE id = $6;`,
      [
        product.name,
        product.description,
        product.price,
        product.stockQuantity,
        product.isActive,
        product.id
      ]
    )

    return product
  }
// DELETE PRODUCT
  static async delete(id) {
    await query(`DELETE FROM products WHERE id = $1`, [id])
    return { message: "Product deleted successfully." }
  }

}

module.exports = { ProductModel }
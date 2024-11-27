const getProducts = async() =>{
 try {
  const response = await fetch('http://localhost:5000/api/products')
  if(!response.ok){
    throw new Error(`Erro: ${response.status} - ${response.statusText}`)
  }
  return await response.json()
 } catch (error) {
  console.log(error)
 }
}


console.log(getProducts().then((products) => console.log(products)))
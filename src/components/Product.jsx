import { useState } from "react";
import Card from "./Card";
import AddProduct from "./Add-Product";

const Product = () => {
  const [products, setProducts] = useState([
    {id:1, name:"product-1", price:123, sale:12, quantity:43, img:"./src/assets/pro.png"},
    {id:2, name:"product-1", price:123, sale:12, quantity:43, img:"./src/assets/pro.png"},
    {id:3, name:"product-1", price:123, sale:12, quantity:43, img:"./src/assets/pro.png"},
    {id:4, name:"product-1", price:123, sale:12, quantity:43, img:"./src/assets/pro.png"},
  ])
  const [search, setSearch] = useState("")
  return (
    <div className="container">
      <div className="row mt-3">
        <div className="row">
          <div className="col-md-3">
            <AddProduct products={products} setProducts={setProducts}/>
          </div>
          <div className="col-md-6 text-center">
            <input type="text" placeholder="Search..." onChange={(e)=>setSearch(e.target.value)}/>
          </div>
        </div>
        {
          products.filter(item=>item.name.includes(search)).map(item=>(
            <div className="col-md-3 my-3" key={item.id}>
              <Card item={item} products={products} setProducts={setProducts}/>
            </div>      
          ))
        }
      </div>
    </div>
  )
}

export default Product
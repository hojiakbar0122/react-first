import Players from "./components/Player";
import Counter from "./components/Counter";
import { useState } from "react";
import Card from "./components/Card";
import AddProduct from "./components/Add-Product";

const App = () => {
  const [products, setProducts] = useState([
    {id:1, name:"product-1", price:123, sale:12, quantity:43, img:"./src/assets/pro.png"},
    {id:2, name:"product-1", price:123, sale:12, quantity:43, img:"./src/assets/pro.png"},
    {id:3, name:"product-1", price:123, sale:12, quantity:43, img:"./src/assets/pro.png"},
    {id:4, name:"product-1", price:123, sale:12, quantity:43, img:"./src/assets/pro.png"},
  ])
  return (
    <div className="container">
      {/* <Counter/> */}
      {/* <Players/> */}
      <div className="row mt-3">
        <AddProduct products={products} setProducts={setProducts}/>
        {
        products.map(item=>(
          <div className="col-md-3 my-3" key={item.id}>
            <Card item={item}/>
          </div>      
        ))
      }
      </div>
    </div>
  )
}

export default App
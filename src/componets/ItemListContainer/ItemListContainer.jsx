import { useEffect, useState  } from "react";
import { getProductsByCategory } from "../../asyncMock.js"
import  ItemList  from "../ItemList/ItemList.jsx";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";

const ItemListContainer =({greetings})=> {
  const [products, setProducts]= useState([])
  const {category} = useParams()

  useEffect(()=>{
    getProductsByCategory(category)
      .then((res)=>{
        setProducts(res)
    })
      .catch((err)=> console.log(err))
  }, [category])

return(
  <div>
    <h1>{greetings}</h1>
    <ItemList products={products} />
  </div>
)
}
  export default ItemListContainer
  
import { useEffect, useState } from "react"
import { getProductsById } from "../../asyncMock";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail.jsx";



export const ItemDetailContainer = () => {
    const [products, setProducts] = useState();
    const { id } = useParams()
    console.log(id)

        useEffect(()=>{
            console.log(id)
            getProductsById(id) 
                .then((res)=>{
                    
                    setProducts(res)
                })
                .catch((err)=>console.log(err))
        }, [id])
    return(
        <div>
            <ItemDetail {...products} />
        </div>
    )

}
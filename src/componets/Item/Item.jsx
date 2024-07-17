import { Link } from "react-router-dom"

const Item = ({id, name, description, img, price, stock}) => {
    return (
        <div className="p-1 m-1">
            <h1>{name}</h1>
            <img className="p-2" src= {img} alt= {name} style={{width: 200}} />
            <p>{description}</p>
            <h2> U$D {price}</h2>
            <p> Stock Actual: {stock}</p>
            <Link className="btn btn-primary" to={`/detail/${id}`}>Ver Detalle</Link>
        </div>
    )
}

export default Item
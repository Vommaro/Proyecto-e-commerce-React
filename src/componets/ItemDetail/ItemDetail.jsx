



const ItemDetail = ({name, img, price, category, description, stock}) => {
  return (
    <article className="p-1 m-1">
        <h1>{name}</h1>
        <img src={img} style={{width:300}} />
        <p>Category: {category}</p>
        <p>{description}</p>
        <p>Cantidad en Stock: {stock}</p>
        <h2>U$D {price}</h2>
    </article>
  )
}

export default ItemDetail

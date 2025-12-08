import { useParams } from "react-router-dom"
import { coffeeBeans } from "../data/data"
import "../style/product-detail-page.css"

const ProductDetailPage = () => {

const {id} = useParams()


const product = coffeeBeans.find((item) => item.id === Number(id))


  return (

    <>
    <div className="productDetail">
    
    <div className="coffee-image">
      <img src={product.imgUrl} />
    </div>

    <div className="coffee-details">
      <h1>{product.name}</h1>
      <p> {product.desc}</p>
      <p className="price coffee">{product.price.toFixed(2)}₾</p>
      </div>

    <button>ყიდვა</button>
    </div>
    </>
  )
}

export default ProductDetailPage
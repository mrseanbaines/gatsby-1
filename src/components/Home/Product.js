import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

export default function Product({ product }) {
  return (
    <div
      className="col-11 col-md-3 my-4 d-flex
                   mx-auto"
    >
      <div className="card" style={{ minHeight: "100%" }}>
        <Link to={`/shop/${product.slug}`}>
          <Img fluid={product.images[0].fluid} className="card-img-top" />
        </Link>
        <div className="card-body text-center">
          <h6>{product.title}</h6>
          <h6>£{product.price}</h6>
          <button
            className="btn btn-green mt-3 snipcart-add-item"
            data-item-id={product.id}
            data-item-price={product.price}
            data-item-url="https://gatsby-ecommerce-project.netlify.com/shop"
            data-item-image={product.images[0].fluid.src}
            data-item-name={product.title}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  )
}

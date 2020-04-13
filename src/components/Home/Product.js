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
          <button className="btn btn-green mt-3">ADD TO CART</button>
        </div>
      </div>
    </div>
  )
}

import React, { Component } from "react"
import Title from "../Globals/Title"
import Img from "gatsby-image"
import { Link } from "gatsby"
import Product from "./Product"

const getCategories = products => {
  let tempProducts = products.map(products => {
    return products.node.category
  })
  let tempCategories = new Set(tempProducts)
  let categories = Array.from(tempCategories)
  categories = ["All", ...categories]
  return categories
}

export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: props.products.edges,
      coffeeItems: props.products.edges,
      categories: getCategories(props.products.edges),
    }
  }
  handleProducts = category => {
    let tempProducts = [...this.state.products]
    if (category === "All") {
      this.setState(() => {
        return { coffeeItems: tempProducts }
      })
    } else {
      let products = tempProducts.filter(
        ({ node }) => node.category === category
      )
      this.setState(() => {
        return { coffeeItems: products }
      })
    }
  }

  render() {
    if (this.state.products.length > 0) {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="Our Products" />
            {/*categories */}
            <div className="row mb-5">
              <div className="col-12 mx-auto text-center">
                {this.state.categories.map((category, index) => {
                  return (
                    <button
                      type="button"
                      key={index}
                      className="btn btn-green m-3"
                      onClick={() => {
                        this.handleProducts(category)
                      }}
                    >
                      {category}
                    </button>
                  )
                })}
              </div>
            </div>
            {/*products */}
            <div className="row">
              {this.state.coffeeItems.map(({ node: product }) => {
                return <Product key={product.id} product={product} />

                // return (
                //   <div
                //     key={node.id}
                //     className="col-11 col-md-3 my-4 d-flex
                //    mx-auto"
                //   >
                //     <div className="card" style={{ minHeight: "100%" }}>
                //       <Link to={`/shop/${node.slug}`}>
                //         <Img
                //           fluid={node.images[0].fluid}
                //           className="card-img-top"
                //         />
                //       </Link>
                //     </div>
                //     {/*itm info */}
                //     <div className="card-body text-center">
                //       <h6>{node.title}</h6>
                //       <h6>£{node.price}</h6>
                //       <button className="btn btn-green mt-3">
                //         ADD TO CART
                //       </button>
                //       <a href="/contact">
                //         <button className="btn btn-green mt-3">
                //           MORE INFO
                //         </button>
                //       </a>
                //     </div>
                //     {/*end of itm info */}
                //   </div>
                // )
              })}
            </div>
          </div>
        </section>
      )
    } else {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="Our Products"></Title>
            <div className="row">
              <div className="col-10 col-sm-6 mx-auto text-center">
                <h1>there are no items to display</h1>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
}

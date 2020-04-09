import React, { Component } from "react"
import Title from "../Globals/Title"
import Img from "gatsby-image"

const getCategories = items => {
  return items
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
  render() {
    console.log(this.state.categories)
    if (this.state.products.length > 0) {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="Our Products" />
            {/*categories */}
            {/*products */}
            <div className="row">
              {this.state.coffeeItems.map(({ node }) => {
                return (
                  <div
                    key={node.id}
                    className="col-11 col-md-3 my-4 d-flex
                   mx-auto"
                  >
                    <div>
                      <Img fixed={node.images[0].fixed} />
                    </div>
                  </div>
                )
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

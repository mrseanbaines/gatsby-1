import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"
/*import "https://www.google.com/search?client=firefox-b-d&q=mycotown#lrd=0x48769b7813079db3:0xee1cdc358016eda4,1,,," from "google"*/

export default function info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <Title title="We currently have a five star rating on Google." />
            <p className="lead text-muted mb-5">
              We currently have a five star rating on google.
            </p>
            {/*<Link to="https://www.google.com/search?client=firefox-b-d&q=mycotown#lrd=0x48769b7813079db3:0xee1cdc358016eda4,1,,,"></Link>*/}
            <Link to="/about/">
              <button className="btn text-uppercase btn-green">
                SEE OUR GOOGLE REVIEWS
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

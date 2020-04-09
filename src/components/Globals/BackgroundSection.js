import React from "react"
import BackgroundImage from "gatsby-background-image"
import { Link } from "gatsby"
export default function BackgroundSection({
  img,
  styleClass,
  title,
  children,
}) {
  return (
    <BackgroundImage className={styleClass} fluid={img}>
      <div className="oysterTitle">
        <h1
          className="title text-dark
    text-center display-4 font-weight-bold"
        >
          {title}
        </h1>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            {/*<p className="lead text-muted mb-5">*/}
            <Link to="/shop/">
              <button className="btn text-uppercase btn-green">SHOP</button>
            </Link>
            {/*</p>*/}
          </div>
        </div>
      </div>

      {children}
    </BackgroundImage>
  )
}

BackgroundSection.defaultProps = {
  title: "default title",
  styleClass: "default-background",
}

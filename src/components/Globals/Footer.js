import React from "react"

export default function Footer() {
  return (
    <footer className="footer py-3">
      <div className="cntainer">
        <div className="row>">
          <div className="col-10 mx-auto col-md-6 text-green text-center">
            <h3>all rights reserved {new Date().getFullYear().toString()}</h3>
          </div>
        </div>
      </div>
    </footer>
  )
}

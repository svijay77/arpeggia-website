import React from "react"
import "./styles.css"
import { Link } from "react-router-dom";

export default function NavBarBlue() {
  return (
    <div className="group-765 flex-row-vcenter">
    <Link to = "/"><img
      src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/xbc99eaf5as-241%3A19?alt=media&token=edb74612-4d39-4851-8844-8a8199d3eb23"
      alt="Not Found"
      className=".arpeggia-_logo-_transparent-013"
    /></Link>
    <p className="txt-777 flex-hcenter"> About Us</p>
    <Link to = "/ourteam" className="txt-476 flex-hcenter">Our Team</Link>
    <Link to = "/involve"className="txt-387 flex-hcenter">Get Involved</Link>
  </div>
  )
}

import React from "react"
import "./styles.css"
import { Link } from "react-router-dom";

export default function NavBarBlue() {
  return (
    <div className="group-765 flex-row-vcenter">
    <Link to = "/"><img
      src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/f934c5zjpp-241%3A16?alt=media&token=4c8831d4-93ff-4bd3-a854-f1364b7f012e"
      alt="Not Found"
      className="arpeggia-_logo-_transparent-013"
    /></Link>
    <p className="txt-777 flex-hcenter"> About Us</p>
    <Link to = "/ourteam" className="txt-476 flex-hcenter">Our Team</Link>
    <Link to = "/involve"className="txt-387 flex-hcenter">Get Involved</Link>
  </div>
  )
}

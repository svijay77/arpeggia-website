import React from "react"
import "./styles.css"
import { Link } from "react-router-dom";

export default function NavBarBlue() {
  return (
      <div className="group-765 flex-row-vcenter">
        <Link to = "/"><img
          src="https://i.postimg.cc/PJqWZMH3/image.png"
          alt="Not Found"
          className="arpeggia-_logo-_transparent-013"
        /></Link>
        <p className="txt-778 flex-hcenter"> About Us</p>
        <Link to = "/ourteam" className="txt-477 flex-hcenter">Our Team</Link>
        <Link to = "/involve"className="txt-388 flex-hcenter">Get Involved</Link>
      </div>
  )
}

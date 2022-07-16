import React from "react"
import "./styles.css"
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
      <div className="group-764 flex-row-vcenter">
        <Link to = "/"><img
          src="https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/fb518oktr7c-152%3A21?alt=media&token=a731d736-ca01-4965-ba67-bb679636c3e7"
          alt="Not Found"
          className="arpeggia-_logo-_transparent-011"
        ></img></Link>
        <p className="txt-777 flex-hcenter"> About Us</p>
        <Link to = "/ourteam" className="txt-476 flex-hcenter">Our Team</Link>
        <p className="txt-387 flex-hcenter">Get Involved</p>
      </div>
  )
}


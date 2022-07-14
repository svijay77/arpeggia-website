import React from "react"
import "./styles.css"

export default function NlText() {
  return (
    <div className="nl-text flex-col-hstart-vstart">
      <div className="group-392">
        <p className="txt-3310 flex-hcenter">Sign up for our Newsletter! </p>
      </div>
      <p className="txt-737">
        Learn more about what our musicians and mentors have been up to, as well
        as information on upcoming events and programs.
      </p>
      <div>
        <p className="txt-3310 flex-hcenter" id="iAmA">I am a... </p>
      </div>
      <div id= "options">
      <div className="group-262 flex-row">
          <div className="check-1" />
          <p className="txt-912 flex-hcenter">Educator</p>
        </div>
        <div className="group-441 flex-row-vend">
          <div className="check-2" />
          <p className="txt-914 flex-hcenter">Student</p>
        </div>
        <div className="group-4411 flex-row-vend">
        <div className="check-2" />
        <p className="txt-914 flex-hcenter">Parent</p>
      </div>
      <div className="email-bar flex-col-hstart-vstart">
      <div className="group-371">
        <p className="txt-2108 flex-hcenter">email address</p>
      </div>
    </div>
      </div>
 

    </div>
  )
}

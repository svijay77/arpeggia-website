import React from "react"
// import NavBar from "./Components/NavBar"
import Navigation from "./Components/Navigation"
// import NavBarBlue from "./Components/NavBarBlue"
import MainBanner from "./Components/MainBanner"
import OurTeam from "./Components/OurTeam"
import NlText from "./Components/NlText"
import { Route, Routes } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  return (
  <div>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path = "/aboutus" element={<AboutUs />} /> */}
      <Route path = "/ourteam" element={<Team />} />
     {/* <Route path = "/involve" element={<Involve />} />   */}
    </Routes>
  </div>
  );
}

function Home() {
  return (
    <div>
      <Navigation />
      <div className = "page-content">
        <MainBanner />
        <NlText />
      </div>
    </div>
  )
}

function Team() {
  return (
    <div>
      <Navigation />
      <OurTeam />
    </div>
  )
}

function Involve() {
  return (
    <div>
      <Navigation />
      <h1 className="involvedHeader">Get Involved.</h1>
      
      <div className="parent-box"/>
      <p className="parent-header">For Parents.</p>
      
      <div className="student-box"/>
      <p className="student-header">For Instructors.</p>
      
      <div className="teacher-box"/>
      <p className="teacher-header">For Educators.</p>
      
    </div>
  )
}

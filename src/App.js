import React from "react"
import NavBar from "./Components/NavBar"
import NavBarBlue from "./Components/NavBarBlue"
import MainBanner from "./Components/MainBanner"
import OurTeam from "./Components/OurTeam"
import NlText from "./Components/NlText"
import { Routes, Route} from "react-router";

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
      <NavBar />
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
      <NavBar />
      <OurTeam />
    </div>
  )
}

function Involve() {
  return (
    <div>
      <NavBarBlue />
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

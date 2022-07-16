import React from "react"
import NavBar from "./Components/NavBar"
import MainBanner from "./Components/MainBanner"
import NlText from "./Components/NlText"
import { Routes, Route} from "react-router";

export default function App() {
  return (
  <div>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path = "/aboutus" element={<AboutUs />} /> */}
      <Route path = "/ourteam" element={<Team />} />
      {/* <Route path = "/involve" element={<Involve />} />  */}
    </Routes>
  </div>
  );
}

function Home() {
  return (
    <div>
      <NavBar />
      <MainBanner />
      <NlText />
    </div>
  )
}

function Team() {
  return (
    <div>
      <NavBar />
      <p>Welcome to our team lol!</p>
    </div>
  )
}


import {Route , Routes , Navigate } from "react-router-dom"
import Home from "./Pages/Home/Home"
import "./App.css"
import About from "./Pages/About/About"
import Location from "./Pages/Location/Location"
import Careers from "./Pages/Careers/Careers"

export default function App() {
  return(
    <>
      <Routes>
          <Route path="*" element={<Navigate to="/" />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About"  element={<About />} ></Route>
          <Route path="/Location" element={<Location />}></Route>
          <Route path="/Careers" element={<Careers />}></Route>
      </Routes>
    </>
  )
}
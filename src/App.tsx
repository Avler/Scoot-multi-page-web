import Navbar from "./Components/Navbar"
import {Route , Routes , Navigate } from "react-router-dom"
import Home from "./Components/Home"
import "./App.css"

export default function App() {
  return(
    <>
      <Routes>
          <Route path="*" element={<Navigate to="/" />}></Route>
          <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  )
}
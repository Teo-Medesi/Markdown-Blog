import React from "react"
import {Routes, Route} from "react-router-dom"
import "./assets/css/output.css"
import Articles from "./pages/Articles"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Articles />} />
    </Routes>
  )
}

export default App

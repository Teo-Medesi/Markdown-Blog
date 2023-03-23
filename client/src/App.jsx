import React from "react"
import {Routes, Route} from "react-router-dom"
import "./assets/css/output.css"
import Article from "./components/Article"
import Articles from "./pages/Articles"
import NewArticle from "./pages/NewArticle"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Articles />} />
      <Route path="/articles/new" element={<NewArticle />} />
      <Route path="/articles/:id" element={<Article />} />
    </Routes>
  )
}

export default App

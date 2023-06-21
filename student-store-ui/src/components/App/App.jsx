import * as React from "react"
import { BrowserRouter } from 'react-router-dom'
import "./App.css"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Home />
        </main>
      </BrowserRouter>
    </div>
  )
}

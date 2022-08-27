import React from "react"
import Info from "./components/Info"
import About from "./components/About"
import Intrests from "./components/Intrests"
import Footer from "./components/Footer"

export default function App(){
    return(
         <div className="container">
      <Info />
      <main className="main">
        <About />
        <Intrests />
      </main>
      <Footer />
    </div>
    )
}
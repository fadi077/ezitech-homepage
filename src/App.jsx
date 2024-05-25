import React from "react"
 
import InformationBar from "./Components/informationbar"
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Award from "./Components/Award"
import Works from "./Components/Works"
import Recommended_Courses from "./Components/Recommended_Courses"
import Internships from "./Components/Internships"
import App_Promotion from "./Components/App_Promotion"
import Investing from "./Components/Investing"
import Footer from "./Components/footer"

function App() {
   
  return (
    <div>
      <InformationBar />
      <Navbar />
      <Hero />
      {/* <Award /> */}
      <Works />
      <Recommended_Courses />
      <Internships />
      <App_Promotion />
      <Investing />
      <Footer />
    </div>
  )
}

export default App

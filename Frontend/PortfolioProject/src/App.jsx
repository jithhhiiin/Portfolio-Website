import React from 'react'
import './App.css'
import Navbar from './componenets/Navbar'
import Hero from './componenets/Hero'
import Skills from './componenets/Skills'
import Projects from './componenets/Projects'
import Contact from './componenets/Contact'
import About from './componenets/About'
import Cursor from './componenets/Cursor'
import Footer from './componenets/Footer'


function App() {
  return (
    <div>
      <Cursor/>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
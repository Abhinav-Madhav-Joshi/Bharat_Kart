import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Logo from './assets/Logo.jpg'
import './App.css'

function Home() {
  return (
    <>
      <h1 className='Title'>Bharat Kart</h1>
      <body>
        
      </body>
    </>
  )
}

function About() {
  return <>
    <p className="About">
      The founder of the company is legendary Mr. Vijay Anand, who build this company with a thought to build a brand which people can rely on and which is build on trust and the moto of purity.
    </p>
  </>
}


function App() {
  return (
    <>
      <nav className='Nav'>
        <div>
          <img src={Logo} className='logo'/>
        </div>
        <div>
          <Link to="/" className='link'>Home</Link> 
          <Link to="/about" className='link'>About</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App

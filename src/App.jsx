import { Routes, Route, Link } from 'react-router-dom'
import Logo from './assets/Logo.jpg'
import Mishri from './assets/Mishri.jpeg'
import Honey from './assets/Honey.jpeg'
import Chivda from './assets/Chivda.jpeg'
import Sattu from './assets/Sattu.jpeg'
import Pickle from './assets/Pickle.jpeg'
import Ghugni from './assets/Ghugni.jpeg'
import Vijay from './assets/Vijay.jpg'
import './App.css'

function Home() {
  return (
    <>
      <h1 className='Title'>Bharat Kart</h1>
      <main className='main'>
        <div className='Card'>
          <img src={Mishri} className='images'/>
          <span className='product'>Dhaga-Mishri <br /> &#8377;125 (200gm)</span>
        </div>
        <div className='Card'>
          <img src={Honey} className='images'/>
          <span className='product'>Pure Honey <br /> &#8377;250 (1L)</span>
        </div>
        <div className='Card'>
          <img src={Chivda} className='images'/>
          <span className='product'>Special Chivda <br /> &#8377;80 (150gm)</span>
        </div>
        <div className='Card'>
          <img src={Sattu} className='images'/>
          <span className='product'>Pure Sattu <br /> &#8377;300 (1kg)</span>
        </div>
        <div className='Card'>
          <img src={Ghugni} className='images'/>
          <span className='product'>Chana Ghugni <br /> &#8377;150 (200gm)</span>
        </div>
        <div className='Card'>
          <img src={Pickle} className='images'/>
          <span className='product'>Mango Pickle (Aam Aachar) <br /> &#8377;250 (1kg)</span>
        </div>
      </main>
    </>
  )
}

function About() {
  return <>
    <img src={Vijay} className='Founder'/>
    <p className="About">
      Our story begins with the legendary Mr. Vijay Anand — a visionary who set out to create more than just a company. His mission? To craft a brand people could trust, built on a foundation of purity and reliability… with a sprinkle of excellence in every product.
    </p>
  </>
}


function App() {
  return (
    <div style={{display:'flex',flexDirection:'column',minHeight:'100vh'}}>
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

      <div style={{flex:'1'}}>

      </div>

      <footer className='footer'>
        <span style={{marginLeft:'1em',color:'black'}}> &copy; All Rights Reserved </span>
      </footer>
    </div>
  )
}

export default App

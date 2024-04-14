import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Herosection from './Components/Herosection'
import img1 from './img1.png'
import img3 from './img3.jpeg';
import img4 from './img4.png';
import hello from './hello.jpeg';
import fin1 from './fin1.jpg';
import Home from './Components/Home'
import Signin from './Components/Signin'
import Chat from './Components/Chat'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Networth from './Components/Networth'
import Blog from './Components/Blog'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="conatiner">
  

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Chat" element={<Chat />} />
          <Route path="/Signin" element={<Signin />} />
          {/* <Route path="/Networth" element={<Networth />} /> */}
          <Route path="/Blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

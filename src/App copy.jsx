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
import Chat from './Components/Chat'
import { BrowserRouter,Routes,Route } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="conatiner">
      <Navbar/>
      {/* /* <Routes>
        <Route path="/" element={<Home />} />
      </Routes> */ }
      <Herosection/>
      <div className="Card-Contain">
            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={img1} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Your savings for the last month are:</p>
                    <h5 className="card-title">$38,000</h5>
                    <a href="#" className="btn btn-primary bg-success">Savings</a>
                </div>
            </div>
            <div className="card " style={{ width: "18rem" }}>
                <img className="card-img-top" src={img4} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Your savings for the last month are:</p>
                    <h5 className="card-title">$58,000</h5>
                    <a href="#" className="btn btn-primary bg-danger">Expenses</a>
                </div>
            </div>
            <BrowserRouter>
              <Routes>
                <Route path="/Chat" element={<Chat/>}/>
              </Routes>
            </BrowserRouter>
            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={hello} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title"></h5>
                    <p className="card-text">Ask your queries about your portfolio!</p>
                    <a href="#" className="btn btn-primary">Recommendation</a>
                </div>
            </div>
        </div>
            
        <Footer/>
    </div>
  )
}

export default App

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Portfolio from "./pages/Portfolio"
import Header from "./components/Header"
import Footer from "./components/Footer"
import NotFound from "./pages/NotFound"
import "./App.css"

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
        <div>
          <Header/>
        </div>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/portfolio' element={<Portfolio/>}/>
            
            <Route path='*' element={<NotFound/>}/>
            
          </Routes>
          <div>
            <Footer/>
          </div>
        </BrowserRouter>
        
      </div>
    </>
  )
}

export default App

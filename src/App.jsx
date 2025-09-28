import './App.css'
import Contact from './components/contact/index'
import Home from "./components/home/index"
import { Routes, Route } from "react-router"
import Layout from './components/Layout'
import AboutMe from './components/aboutMe/aboutMe'

function App() {
  

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/aboutMe" element={<AboutMe />}/>
      </Route>    
    </Routes>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './Components/MainLayout'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element = {<MainLayout/>}>
    <Route index element={<Home />} />
    <Route path='/about' element = {<About />}/>
    <Route path='/skills' element = {<Skills />}/>
    <Route path='/projects' element = {<Projects />}/>
    <Route path='/contact' element = {<Contact />}/>




    </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App

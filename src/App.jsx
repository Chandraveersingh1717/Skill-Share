import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Dashboard from './components/Dashboard'
import Footer from './components/footer'
import SignUp from './components/signup'
import Home from './components/home'
import Friends from './components/friends'
import FAQ from './components/FAQ'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateProfile from "./components/CreateProfile"; 



function App() {

  return (
    <>
      <Dashboard />
      {/* <Footer /> */}
      {/* <SignUp/> */}
      {/* <Home/> */}
      {/* <Friends/> */}
      {/* <FAQ/> */}
      {/* <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} /> */}
        {/* <Route path="/create-profile" element={<CreateProfile />} /> */}

      {/* </Routes>
    </Router> */}
    </>
  )
}

export default App

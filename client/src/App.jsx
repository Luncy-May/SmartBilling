import { useState } from 'react'
import { Navbar } from './components'
import { Routes, Route } from 'react-router-dom';
import { Community, About, Calendar, Dashboard, Home, MyPlans, Profile, Setting, Support, Team } from './pages';
import { Login, Register, Delete } from './pages/AuthPages';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/calendar/*" element={<Calendar />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/myplans/*" element={<MyPlans />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/setting/*" element={<Setting />} />
        <Route path="/support/*" element={<Support />} />
        <Route path="/team/*" element={<Team />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="/register/*" element={<Register />} />
        <Route path="/community/*" element={<Community />} />
      </Routes>
    </>
  )
}

export default App

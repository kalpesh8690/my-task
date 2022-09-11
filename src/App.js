import React from 'react'
import Login from './pages/Login'
import CustomerData from './pages/CustomerData'
import Dashboard from './pages/Dashboard'
import {Route,Routes,} from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/dashboard/:id' element={<CustomerData/>}/>
    </Routes>
  )
}

export default App
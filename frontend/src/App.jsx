import {BrowserRouter , Routes,Route  } from 'react-router-dom'
import './App.css'
import HomePage from './HomePage'
import Navbar from './Navbar'
import ClaimForm from './ClaimForm'
import RegisterCompany from './RegisterCompany'
import AdminLogin from './AdminLogin'
import Dashboard from './Dashboard'
import AddPolicy from './AddPolicy'
// import React  from 'react'
 

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/claim-form' element={<ClaimForm/>}/>
          <Route path='/company-register' element={<RegisterCompany/>}/>
          <Route path='/admin-login' element={<AdminLogin/>}/>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/add-new-policy" element={<AddPolicy/>} />
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

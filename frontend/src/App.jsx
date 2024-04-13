import {BrowserRouter , Routes,Route  } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import HomePage from './HomePage'
import Navbar from './Navbar'
import RegisterCompany from './RegisterCompany'
import AdminLogin from './AdminLogin'
import Dashboard from './Dashboard'
import AddPolicy from './AddPolicy'
import ClaimForm from './ClaimForm'
// import React  from 'react'
 

function App() {

  const [user, setUser] = useState({});

  return (
    <>
      <BrowserRouter>
        <Navbar user={user} setUser={setUser}></Navbar>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/claim-form' element={<ClaimForm/>}/>
          <Route path='/company-register' element={<RegisterCompany/>}/>
          <Route path='/admin-login' element={<AdminLogin/>}/>
          <Route path="/dashboard" element={<Dashboard user={user}/>} />
          <Route path="/add-new-policy" element={<AddPolicy/>} />
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


//add policy ref on companies page add append policy id when adding new policy
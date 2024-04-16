import {BrowserRouter , Routes,Route  } from 'react-router-dom'
import { useState } from 'react'
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

  const [user, setUser] = useState(null);

  return (
    <>
      <BrowserRouter>
        <Navbar user={user} setUser={setUser}></Navbar>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/claim-form' element={<ClaimForm/>}/>
          <Route path='/company-register' element={<RegisterCompany/>}/>
          <Route path='/admin-login' element={<AdminLogin setUser={setUser}/>}/>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-new-policy" element={<AddPolicy user={user}/>} />
       </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


//add policy ref on companies page add append policy id when adding new policy
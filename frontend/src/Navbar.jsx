import { useNavigate } from 'react-router-dom'
import "./navbar.css";
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Navbar({ user, setUser }) {
  const navigate = useNavigate();



  useEffect(() => {
    if (localStorage.getItem("token")) {
      axios.get('/api/me', { headers: { Authorization: "Bearer " + localStorage.getItem("token") } })
        .then((res) => {
          console.log(res.data);
          setUser(res.data);
        })
        .catch(() => {
          console.log("invalid auth token");
        })
    }
  }, [])

  return (
    <div className="nav-container">
      <div className="logo-container">
        <img onClick={() => navigate("/")} src="logo.png" alt="" height={"60px"} />
      </div>
      <div className="nav-button-container">
        <span className="support">
          <a href="" className="supportbtn-link">
            <button id="track-status">Track Status</button>
          </a>
        </span>
          <span className="signin">
            {!user.cName ? <>
                <button onClick={() => navigate('/admin-login')} id="sign-in">Sign In</button>
            </> : <>
              <button>{user.cName}</button>
            </>}
          </span>
        <span className="support">
          <a href="https://vihaan.ieeedtu.in/" className="supportbtn-link">
            <button id="support">Support</button>
          </a>
        </span>
      </div>
    </div>
  );
}

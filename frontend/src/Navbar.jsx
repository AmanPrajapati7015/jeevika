import {useNavigate} from 'react-router-dom'
import "./navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="nav-container">
      <div className="logo-container">
        <img onClick={()=>navigate("/")} src="logo.png" alt="" height={"60px"}/>
      </div>
      <div className="nav-button-container">
        <span className="support">
          <a href="" className="supportbtn-link">
            <button id="track-status">Track Status</button>
          </a>
        </span>
        <span className="signin">
            <button onClick={()=>navigate('/admin-login')} id="sign-in">Sign In</button>
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

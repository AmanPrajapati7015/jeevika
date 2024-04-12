
import "./Navbar.css";
import logo from "../assets/ghar.png";
import Button from 'react-bootstrap/Button'

export default function Navbar() {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <label htmlFor="logo-name-ji logo-name-vika">
        <font id="logo-name-ji">जी</font><font id="logo-name-vika">vika</font>
        </label>
        {/* <img className="logo-img" src="" /> */}
      </div>
      <div className="nav-button-container">
        <span className="support">
          <a href="" className="supportbtn-link">
            <button id="track-status">Track Status</button>
          </a>
        </span>
        <span className="signin">
          <a href="" className="signinbtn-link">
            <button id="sign-in">Sign In</button>
          </a>
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

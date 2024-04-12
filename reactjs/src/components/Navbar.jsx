import "./Navbar.css";
import logo from "../assets/logo-removebg-preview.png";
import Button from 'react-bootstrap/Button'

export default function Navbar() {
  return (
    <div className="nav-container">
      {/* <div className="logo-container">
              <label htmlFor="logo-name-ji logo-name-vika"> */}
                  <img src={logo} alt="logo" className="jeevika-logo"/>
        {/* <font id="logo-name-ji">जी</font><font id="logo-name-vika">vika</font>
        </label>
        <img className="logo-img" src="" />
      </div> */}
      <div className="nav-button-container">
        <span className="support">
          <a href="" className="supportbtn-link">
            <button id="track-status" a={Button}>Track Status</button>
          </a>
        </span>
        <span className="signin">
          <a href="" className="signinbtn-link">
            <button id="sign-in" a={Button}>Sign In</button>
          </a>
        </span>
        <span className="support">
          <a href="https://vihaan.ieeedtu.in/" className="supportbtn-link">
            <button id="support" a={Button}>Support</button>
          </a>
        </span>
      </div>
    </div>
  );
}

import "./Navbar.css";
import logo from "../assets/ghar.png";

export default function Navbar() {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <font className="logo-name-ji">जी</font><font className="logo-name-vika">vika</font>
        {/* <img className="logo-img" src="" /> */}
      </div>
      <div className="nav-button-container">
        <span className="support">
          <a href="https://vihaan.ieeedtu.in/" className="supportbtn-link">
            <button className="support-btn">Track Status</button>
          </a>
        </span>
        <span className="signin">
          <a href="" className="signinbtn-link">
            <button className="support-btn">Sign In</button>
          </a>
        </span>
        <span className="support">
          <a href="https://vihaan.ieeedtu.in/" className="supportbtn-link">
            <button className="support-btn">Support</button>
          </a>
        </span>
      </div>
    </div>
  );
}

import { useState } from "react";
import "../style/navbar-footer.css"
import { Link } from "react-router-dom";

const Navbar = () => {

  const [show, setshow] = useState(false);

  return (
    <>
      {/* მთავარი ნავიგაცია */}
      <div className="navbar-container">

        {/* LOGO */}
        <div>
          <img
            src="https://res.cloudinary.com/dwvgnr2hy/image/upload/v1764929049/ChatGPT_Image_Dec_5_2025_01_57_47_PM_nrvasy.png"
            alt="Logo"
            className="logo"
          />
        </div>

        {/* DESKTOP LIST */}
        <div className="navbar-list">
          <ul className="list">
            <li><Link to="/">მთავარი</Link></li>
            <li><Link to="/menu">მენიუ</Link></li>
            <li><Link to="/contact">კონტაქტი</Link></li>
            <li><Link to="/registration">რეგისტრაცია</Link></li>

            {/* ▼ NEW DROPDOWN HERE */}
            <li className="dropdown">
              <span className="dropbtn">წესები და პირობები ▾</span>

              <ul className="dropdown-content">
                <li><Link to="/delivery">მიტანის სერვისი</Link></li>
                <li><Link to="/privacy">კონფიდენციალურობა</Link></li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="Menu-bar">
          <button 
            onClick={() => setshow(!show)} 
            className="toggle-menu"
          >
            {show ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE NAV */}
      <div className={`navbar-mobile ${show ? " active" : ""}`}>
        <ul>
          <li><Link to="/">მთავარი</Link></li>
          <li><Link to="/menu">მენიუ</Link></li>
          <li><Link to="/contact">კონტაქტი</Link></li>
          <li><Link to="/registration">რეგისტრაცია</Link></li>

          {/* You can add mobile dropdown here LATER if you want */}
        </ul>
      </div>
    </>
  );
};

export default Navbar;

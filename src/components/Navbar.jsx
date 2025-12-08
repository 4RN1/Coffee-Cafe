import { useState } from "react";
import "../style/navbar-footer.css"
import { Link } from "react-router-dom";


const Navbar = () => {

const [show, setshow] = useState(false)

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

        <div className="navbar-list">
          <ul>
            <li><Link to="/">მთავარი</Link></li>
            <li><Link to="/menu">მენიუ</Link></li>
            <li><Link to="/contact">კონტაქტი</Link></li>
            <li><Link to="/registration">რეგისტრაცია</Link></li>

          </ul>
        </div>

        <div className="Menu-bar">
          
       <button onClick={() => setshow(!show)} className="toggle-menu">{show ? '✖' : "☰"}</button> 
        </div>
      </div>


       <div className={`navbar-mobile ${show ? " active" : ""}`}>
         <ul>
            <li><Link to="/">მთავარი</Link></li>
            <li><Link to="/menu">მენიუ</Link></li>
            <li><Link to="/contact">კონტაქტი</Link></li>
            <li><Link to="/registration">რეგისტრაცია</Link></li>

          </ul>
       </div>
    </>
  );
};

export default Navbar;

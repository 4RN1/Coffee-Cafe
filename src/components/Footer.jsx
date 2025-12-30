import { BsInstagram, BsFacebook, BsTiktok } from "react-icons/bs";
import { BsTelephone, BsEnvelope, BsGeoAlt, BsClock } from "react-icons/bs";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        {/* Logo */}
        <div className="footer-box-1">
          <img
            src="https://res.cloudinary.com/dwvgnr2hy/image/upload/v1764939334/ChatGPT_Image_Dec_5_2025_04_55_11_PM_hlojvl.png"
            alt="logo"
            className="logo"
          />
        </div>
        {/* Contact */}
        <div className="footer-box-2">
          <h4>კონტაქტი</h4>

          <ul>
            <li>
              <BsGeoAlt /> 70 ვაჟა-ფშაველა, თბილისი 0932
            </li>
            <li>
              <BsTelephone /> +995 555 46 23 23
            </li>
            <li>
              <BsEnvelope /> example@gmail.com
            </li>
            <li>
              <BsClock /> ორშ – შაბ : 10:00 – 22:00
            </li>
          </ul>
        </div>
        {/*  */}
        <div className="footer-box-3">
          <h4>სოციალური ქსელები</h4>
          <ul>
            <li>
              <BsInstagram /> Facebook
            </li>
            <li>
              <BsFacebook /> Instagram
            </li>
            <li>
              <BsTiktok /> Tiktok
            </li>
          </ul>
        </div>

        <div className="footer-box-4">
          <h4>სწრაფი მენიუ</h4>
          <ul>
            <li>
              <Link to="/">მთავარი</Link>
            </li>
            <li>
              <Link to="/menu">მენიუ</Link>
            </li>
            <li>
              <Link to="/contact">კონტაქტი</Link>
            </li>
            <li>
              <Link to="/registration">რეგისტრაცია</Link>
            </li>
          </ul>
          
        </div>
         <p className="copyright">&copy; 2025 ყველა უფლება დაცულია</p>
      </div>
     
    </>
  );
};

export default Footer;

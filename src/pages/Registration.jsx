import { useState } from "react";
import "../style/registration-page.css";

const Registration = () => {


  const [show, setshow] = useState(false)

  return (
    <>
      {/* რეგისტრაცია */}
      {!show && (
<div className="reg-container">
       
        <img
          src="https://res.cloudinary.com/dwvgnr2hy/image/upload/v1764929049/ChatGPT_Image_Dec_5_2025_01_57_47_PM_nrvasy.png"
          alt=""
        />

         <h1>რეგისტრაცია</h1>
        <form action="submit" className="registration-login-form">
          <label htmlFor="name">სახელი</label>
          <input type="text" placeholder="გიორგი" id="name" />
          <label htmlFor="email">ელ ფოსტა</label>
          <input type="email" placeholder="example@gmail.com" id="email" />
          <label htmlFor="password">პაროლი</label>
          <input type="password" placeholder="********" id="password" />

          <p className="forgot-pswd">დაგავიწყდა პაროლი?</p>

          <div className="reg-btn">
            <button>რეგისტრაცია</button>
          </div>
        </form>
          <p className="log">გააქვს ანგარიში? <span className="login" onClick={() =>{  setshow(true)}}>შესვლა</span></p>
      </div>

      )}
      

    


      {/* ლოგინი */}

      {show && (
<div className="log-container">
        
        <img
          src="https://res.cloudinary.com/dwvgnr2hy/image/upload/v1764929049/ChatGPT_Image_Dec_5_2025_01_57_47_PM_nrvasy.png"
          alt=""
        />
        <h1>შესვლა</h1>
        <form action="submit" className="registration-login-form ">
          <label htmlFor="email">ელ ფოსტა</label>
          <input type="email" placeholder="example@gmail.com" id="email" />
          <label htmlFor="password">პაროლი</label>
          <input type="password" placeholder="********" id="password" />

          

          <div className="reg-btn">
            <button>შესვლა</button>
          </div>


          <p className="log">არ გააქვს ანგარიში? <span className="login" onClick={() => setshow(false)}>რეგისტრაცია</span></p>
        </form>
      </div>
      )}

      
    </>
  );
};

export default Registration;

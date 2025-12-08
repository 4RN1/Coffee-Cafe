import { 
  BsTelephone, 
  BsEnvelope, 
  BsGeoAlt, 
  BsClock
} from "react-icons/bs";

import "../style/contact-page.css"

const Contact = () => {
  return (
    <>
     <div className="contact">
      <div className="contact-wrapper">
         <h1>კონტაქტი</h1>
      <p>დეტალური ინფორმაციისთვის დაგვიკავშირდით:</p>
       <ul className="con-wrapper">
          <li><BsGeoAlt/> 70 ვაჟა-ფშაველა, თბილისი 0932</li>
          <li><BsTelephone/> +995 555 46 23 23</li>
          <li><BsEnvelope/> example@gmail.com</li>
          <li><BsClock/> ორშ – შაბ : 10:00 – 22:00</li>
        </ul>
      </div>

      <div className="form-wrapper">
        <h1>შეიყვანეთ ინფორმაცია</h1>
        <form action="submit" className="contact-form">
          <label htmlFor="name">სახელი</label>
          <input type="text" placeholder="გიორგი" id="name" />
          <label htmlFor="email">ელ ფოსტა</label>
          <input type="email" placeholder="example@gmail.com" id="email" />
          <label htmlFor="subject">თემა</label>
          <input type="text" placeholder="შენიშვნა" id="subject" />
          <label htmlFor="question">კომენტარი/შეკითხვა</label>
          <textarea name="question" id="question" placeholder="კითხვა"></textarea>

          <button>გაგზავნა</button>
        </form>
      </div>
      </div>
    </>
  );
};

export default Contact;

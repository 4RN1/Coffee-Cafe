import "../style/home-page.css";
import { coffeeBeans } from "../data/data";
import { Link } from "react-router-dom";
import AOS from "aos";
import { useEffect } from "react";



const Home = () => {

 useEffect(() => {
    AOS.init({
      duration: 800,    // animation speed
      easing: "ease-in-out",
      once: true,       // whether animation happens only once
    });
  }, []);

  return (
    <>
      <div className="hero">
        <div className="hero-image">
          <h1>უნიკალური ყავა</h1>
          <p>
            დამზადებულია სიყვარულით <span className="heart">❤︎</span>
          </p>
        </div>
      </div>
{/* მენიუს შემოთავაზება*/}
      <div className="products-container" >
        <h1  data-aos="fade-up"
  data-aos-delay="200">შეაფასე ჩვენი მენიუ!</h1>
        <div className="products" >
          <div className="product-view-container" data-aos="fade-up"
  data-aos-delay="200"  >
            <div className="product-image">
              <img
                src="https://res.cloudinary.com/dwvgnr2hy/image/upload/v1764951280/cup-hot-cappuccino-with-cinnamon-table_q5paey.jpg"
                alt=""
              />
            </div>
            <div className="product-wrapper">
              <h2>ცხელი ყავა</h2>
              <p>
                ჩვენი ცხელი ყავა მზადდება ახალი მარცვლებით — კლასიკური არომატი
                და ნაზი ბალანსი.
              </p>
              <Link to="/menu"> მენიუზე გადასვლა</Link>
            </div>
          </div>

          <div className="product-view-container" data-aos="fade-up"
  data-aos-delay="200">
            <div className="product-image">
              <img
                src="https://res.cloudinary.com/dwvgnr2hy/image/upload/v1764952300/coffee-5893926_1280_xdnfop.jpg"
                alt=""
              />
            </div>
            <div className="product-wrapper">
              <h2>ცივი ყავა</h2>
              <p>
                გაგრილდი გამორჩეული ცივი ყავით — ხრაშუნა ყინული და იდეალურად
                დაბალანსებული გემო.
              </p>
              <Link to="/menu">მენიუზე გადასვლა</Link>
            </div>
          </div>

          <div className="product-view-container" data-aos="fade-up"
  data-aos-delay="200">
            <div className="product-image">
              <img
                src="https://res.cloudinary.com/dwvgnr2hy/image/upload/v1764951972/cup-166778_1280_icu8c9.jpg"
                alt="tea"
              />
            </div>
            <div className="product-wrapper">
              <h2>ცხელი ჩაი</h2>
              <p>
                ნაზი არომატები, ბუნებრივი ფოთლები და თბილი ატმოსფერო — აირჩიე
                შენი საყვარელი ჩაი.
              </p>
             <Link to="/menu">მენიუზე გადასვლა</Link>
            </div>
          </div>

          <div className="product-view-container" data-aos="fade-up"
  data-aos-delay="200">
            <div className="product-image">
              <img
                src="https://res.cloudinary.com/dwvgnr2hy/image/upload/v1764951603/cocktail-6950657_1280_guidqt.jpg"
                alt=""
              />
            </div>
            <div className="product-wrapper">
              <h2>სპეციალური სასმელები</h2>
              <p>
                უნიკალური რეცეპტები, ტკბილი არომატები და განსაკუთრებული გემო —
                სცადე ჩვენი სპეციალური სასმელები.
              </p>
              <Link to="/menu">მენიუზე გადასვლა</Link>
            </div>
          </div>

          <div className="product-view-container" data-aos="fade-up"
  data-aos-delay="200">
            <div className="product-image">
              <img
                src="https://res.cloudinary.com/dwvgnr2hy/image/upload/v1764951736/chocolate-ice-cream-2755456_1280_ebcemu.jpg"
                alt=""
              />
            </div>
            <div className="product-wrapper">
              <h2>ნაყინები</h2>
              <p>
                კრემოვანი, დაფქული და გამაგრილებელი ნაყინები — იდეალური არჩევანი
                ცხელი დღეებისთვის.
              </p>
              <Link to="/menu">მენიუზე გადასვლა</Link>
            </div>
          </div>

          <div className="product-view-container" data-aos="fade-up"
  data-aos-delay="200">
            <div className="product-image">
              <img
                src="https://res.cloudinary.com/dwvgnr2hy/image/upload/v1764951875/food-8425777_1280_w40uat.jpg"
                alt=""
              />
            </div>
            <div className="product-wrapper">
              <h2>საჭმელი</h2>
              <p>
                ახალი გამომცხვარი პურის პროდუქტები, სენდვიჩები და ტკბილი
                დესერტები — სწრაფად და გემრიელად.
              </p>
              <Link to="/menu">მენიუზე გადასვლა</Link>
            </div>
          </div>
        </div>
      </div>


      {/* სპეც შეთავაზება */}

      <div className="special-sale"  data-aos="fade-down"
  data-aos-delay="200">
        <h1>ასევე შეიძინე ყავის მარცვლები ჩვენთან იდეალურ ფასში!</h1>
        <div className="pro" >
      {coffeeBeans.map(per => (
        <div key={per.id} className="store">
            <div className="image-section">
              <img src={per.imgUrl} alt=""  />
            </div>
            <div>
              <h2>{per.name}</h2>
              <div className="desc">
              <p>{per.shortDesc}</p>
              </div>
              <p className="price">{per.price.toFixed(2)}₾</p>
            </div>
            <div className="store-buybutton">
            <Link to={`/product/${per.id}`}>ყიდვა</Link>
            </div>
        </div>
      ))}
      </div>
      </div>
    </>
  );
};

export default Home;

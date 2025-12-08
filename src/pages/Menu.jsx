
import { useState, useEffect } from "react";
import {
  hotCoffee,
  coldCoffee,
  tea,
  specDrinks,
  iceCreams,
  food,
} from "../data/data.js";
import "../style/menu-page.css";

const Menu = () => {

 const  [activeCategory, setActiveCategory] = useState("hotCoffee");
useEffect(() => {
  window.scroll({top:0 , behavior:"smooth"})
}, [])


  return (
    <>
      {/* კატეგორიები */}
      <div className="category">
        <h1>მენიუ</h1>
        <ul>
        <li onClick={() => setActiveCategory("hotCoffee")}>ცხელი ყავა</li>
        <li onClick={() => setActiveCategory("coldCoffee")}>ცივი ყავა</li>
        <li onClick={() => setActiveCategory("tea")}>ცხელი ჩაი</li>
        <li onClick={() => setActiveCategory("spec")}>სპეც სასმელები</li>
        <li onClick={() => setActiveCategory("ice")}>ნაყინები</li>
        <li onClick={() => setActiveCategory("food")}>საჭმელი</li>

        </ul>
      </div>
      
      {/* პროდუქტები */}
<div className="products">
      {activeCategory === "hotCoffee" && hotCoffee.map(per => (
        <div key={per.id} className="product-box">
          <div className = "product-images">
            <img src={per.imgUrl} alt="" />
          </div>
          <div>
            <h2>{per.name}</h2>
            <p>{per.desc}</p>
          </div>
          <div className = "product-price">
            <span >{per.price.toFixed(2)}₾</span>
          </div>
        </div>
      ))}

  {activeCategory === "coldCoffee" && coldCoffee.map(per => (
        <div key={per.id} className="product-box">
          <div className = "product-images">
            <img src={per.imgUrl} alt="" />
          </div>
          <div>
            <h2>{per.name}</h2>
            <p>{per.desc}</p>
          </div>
          <div className = "product-price">
            <span>{per.price.toFixed(2)}₾</span>
          </div>
        </div>
      ))}
        {activeCategory === "tea" && tea.map(per => (
        <div key={per.id} className="product-box">
          <div className = "product-images">
            <img src={per.imgUrl} alt="" />
          </div>
          <div>
            <h2>{per.name}</h2>
            <p>{per.desc}</p>
          </div>
          <div className = "product-price">
            <span>{per.price.toFixed(2)}₾</span>
          </div>
        </div>
      ))}

        {activeCategory === "spec" && specDrinks.map(per => (
        <div key={per.id} className="product-box">
          <div className = "product-images">
            <img src={per.imgUrl} alt="" />
          </div>
          <div>
            <h2>{per.name}</h2>
            <p>{per.desc}</p>
          </div>
          <div className = "product-price">
            <span>{per.price.toFixed(2)}₾</span>
          </div>
        </div>
      ))}

        {activeCategory === "ice" && iceCreams.map(per => (
        <div key={per.id} className="product-box">
          <div className = "product-images">
            <img src={per.imgUrl} alt="" />
          </div>
          <div className = "product-price"> 
            <h2>{per.name}</h2>
            <p>{per.desc}</p>
          </div>
          <div className = "product-price">
            <span>{per.price.toFixed(2)}₾</span>
          </div>
        </div>
      ))}


        {activeCategory === "food" && food.map(per => (
        <div key={per.id} className="product-box">
          <div className = "product-images">
            <img src={per.imgUrl} alt="" />
          </div>
          <div>
            <h2>{per.name}</h2>
            <p>{per.desc}</p>
          </div>
          <div className = "product-price">
            <span>{per.price.toFixed(2)}₾</span>
          </div>
        </div>
      ))}

</div>

    </>
  );
};

export default Menu;

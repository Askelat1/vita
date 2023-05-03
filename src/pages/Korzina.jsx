import { ContextBox } from "../App";

import React, { useContext, useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import module from "./Korzina.module.css";



function Korzina(props) {

    const [box, setBox] = useContext(ContextBox)
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
      let itemsCount = 0;
      let totalPrice = 0;

      for (let i = 0; i < box.length; i++) {
          const count = box[i].count || 1;
          itemsCount += count;
          totalPrice += Number(box[i].price) * count;
          console.log( totalPrice);
      }

      setTotalItems(itemsCount);
      setTotalPrice(totalPrice);
  }, [box]);

  const handleIncrease = (index) => {
      const updatedBox = [...box];
      updatedBox[index].count = (updatedBox[index].count || 1) + 1;
      setBox(updatedBox);
  };


  const handleClear = () => {
      setBox([]);
      localStorage.removeItem("box");
  };
    const allProducts = box.map((item, index) => {
        return (
            <div>
            <div className={module.block_h2}  text="1" key={index}>
            <img className={module.block_img} src={item.image} alt="" />
            <h2 className={module.h2}>{item.title}</h2>
            <div>
            <h3 className={module.h3}>{item.price} сом</h3>
            </div>
            </div>
            </div>
        )
    })


    return (
    <div className={module.block1}>
      <div className={module.block}>
        <Link to="/tovar">
          <button className={module.button_2}>
            {" "}
            <i class="fa-solid fa-arrow-left"></i> корзина
          </button>
        </Link>
        <div className={module.block2}>
        {allProducts}
        </div>
        
      </div>
      <div className={module.line}></div>
      <div className={module.block3}>
        <div>
          <h1 className={module.h1}>Контактная информация</h1>
          <div>
            <div className={module.block4}>
              <div>
                <input className={module.f} name="password" placeholder="ФИО" />
                <input className={module.f} placeholder="номер телефона" />
              </div>
              <div>
                <input className={module.f} placeholder="e-mail" />
              </div>
            </div>
          </div>

          <div>
            <h1 className={module.h1}>Адрес доставки</h1>
            <div className={module.block4}>
              <div>
                <input className={module.f} name="password" placeholder="ФИО" />
                <input className={module.f} placeholder="номер телефона" />
              </div>
              <div>
                <input className={module.f} placeholder="адрес" />
                <div className={module.blockh4}>
                  <div className={module.block_h4}>
                    <h4>стоимость</h4>
                    {/* {productSum} */}
                    <h5>{totalPrice} сом</h5>
                  </div>
                </div>
                {/* <button className={module.button_1}>купить</button> */}
              </div>
            </div>
          </div>

          <button className={module.button}>скидочный код</button>
          <button className={module.button}>ввести</button>
          <button onClick={handleClear} className={module.button_1}>купить</button>
        </div>
      </div>
    </div>
  );
}

export default Korzina;

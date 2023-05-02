import { ContextBox } from "../App";
import {useContext} from "react"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import module from "./Korzina.module.css";
import React from "react";
import logo from "../assets/logo.png";



function Korzina(props) {

    const [box, setBox] = useContext(ContextBox)
    const allProducts = box.map((item, index) => {
        return (
            <CardGroup >
            <Card className={module.block_h2}  text="1" key={index}>
            <img className={module.block_img} src={item.image} alt="" />
            <h2 className={module.h2}>{item.title}</h2>
            <div>
            <h3 className={module.h3}>{item.price} сом</h3>
            </div>
            </Card>
            </CardGroup>
            // <div className="goods" key={index}>
            //     <div className="title">{item.title}</div>
            //     <div className="title">
            //         <img src={item.image} alt="" />
            //     </div>
            //     <div>{item.price}</div>
            // </div>
        )
    })

    // const productSum = box.map((item, index) => {
    //     let sum = 0
    //     for(i = 0; i > box.length; i++) {
    //         sum += item.price
    //         return sum
    //     }
    //     return (
    //         <Cart>
    //             <h5>{sum} сом</h5>
    //         </Cart>
    //     )
    // })


    return (
    <div className={module.block1}>
      <div className={module.block}>
        <img src={logo} alt="" />
        <button className={module.button_2}>
          {" "}
          <i class="fa-solid fa-arrow-left"></i> корзина
        </button>
        <CardGroup className={module.block2}>
        {allProducts}
        </CardGroup>
        {/* <div className={module.block2}>
          <div className={module.block_h2}>
            <img  src={kor1} alt="" />
            <h2 className={module.h2}>
              GLS <br />
              Витамины для волос
            </h2>
          </div>
          <div>
            <h3 className={module.h3}>850 сом</h3>
          </div>
        </div> */}

        {/* <div className={module.block2}>
          <div className={module.block_h2}>
            <img src={kor2} alt="" />
            <h2 className={module.h2}>
              Solgar <br />
              Неронутриенс
            </h2>
          </div>

          <div>
            <h3 className={module.h3}>1800 сом</h3>
          </div>
        </div> */}

        {/* <div className={module.block2}>
          <div className={module.block_h2}>
            <img src={kor3} alt="" />
            <h2 className={module.h2}>
              GLS <br />
              Коллаген с гиалуроновой
              <br /> кислотой и витамином С
            </h2>
          </div>

          <div>
            <h3 className={module.h3}>1400 сом</h3>
          </div>
        </div> */}
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
                    <h5>850 сом</h5>
                  </div>
                  <div className={module.block_h4}>
                    <h4>стоимость</h4>
                    {/* {productSum} */}
                    <h5>850 сом</h5>
                  </div>
                </div>
                {/* <button className={module.button_1}>купить</button> */}
              </div>
            </div>
          </div>

          <button className={module.button}>скидочный код</button>
          <button className={module.button}>ввести</button>
          <button className={module.button_1}>купить</button>
        </div>
      </div>
    </div>
  );
}

export default Korzina;

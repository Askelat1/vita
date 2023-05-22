import { ContextBox } from "../App";
// import {useContext} from "react"
import React, { useContext, useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import module from './Tovar.module.css'
import emptyBusket from "../assets/empty-busket.gif";


const Tovar = () => {
    const [box, setBox] = useContext(ContextBox);
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

    const handleDecrease = (index) => {
        const updatedBox = [...box];

        if (updatedBox[index].count > 1) {
            updatedBox[index].count -= 1;
            setBox(updatedBox);
        }
    };

    const handleRemove = (index) => {
        const updatedBox = [...box];
        updatedBox.splice(index, 1)
        setBox(updatedBox)

        updatedBox.length == 0 ? localStorage.removeItem("box") : []
    };

    const handleClear = () => {
        setBox([]);
        localStorage.removeItem("box");
    };

    const allProducts = box.map((item, index) => {
        return (
            <div  className={module.block_o}>
            <div className={module.block2} text="1" key={index}>
                <img className={module.vin} src={item.image} alt="" />
                <div className={module.tittle}>
                    <h2 className={module.h2}>{item.title}</h2>
                </div>
                <div className={module.block_}>
                <div className={module.countBox}>
                    <button className={module.mines} onClick={() => handleDecrease(index)}> - </button>
                    <input className={module.count} type="text" value={item.count || 1} readOnly />
                    <button className={module.plus} onClick={() => handleIncrease(index)}> + </button>
                </div>
                <div className={module.priceRemove}>
                    {item.price * (item.count || 1)} сом
                    <div className={module.trash}>
                        <button onClick={() => handleRemove(index)}>
                            <i class="fa-sharp fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        )
    })



    return (
        
        <div >
            
            <div className={module.block0}>
            <h1 className={module.h1}>Бесплатная доставка по всему Кыргызстану & возврат в течение 30 дней</h1>
        </div>
        <div className={module.block1}>
            <div className={module.tovars}>
            <div>
            {box?.length > 0 ? (
                <div className="cart-info">
                
                </div> 
            ) : ( <div className="colorchik">
            <div className="text-center">
                <h3 style={{paddingTop: "50px"}}>Корзина пуста </h3>
                <p>
                    Выберите что нибудь
                </p>
                {/* <img src={emptyBusket} alt="" /> */}
                <br/>
            </div>
            
<div className="clear-button">
{/* <button className="clear-all" onClick={handleClear}>Clear all Cart</button> */}

</div>
</div>
            )}

        </div>
            <CardGroup  >
                {allProducts}
            </CardGroup>
            </div>
            <div className={module.line1}></div>
            <div className={module.block3}>
                <div className={module.itogs}>
                <div className={module.itog}>
                    <h3>
                    Итого<br />{totalPrice} сом
                    </h3>
                </div>
                <div>
                <Link to="/korzina"><button  className={module.button}>Оформить заказ</button></Link>
                </div>
                </div>
            </div >
        </div>
        
        </div>
    )
}

export default Tovar; 
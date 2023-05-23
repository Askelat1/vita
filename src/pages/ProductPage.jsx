import Header from "../components/Header"
import Footer from "../components/Footer"
import { useParams } from "react-router-dom";
import {useEffect, useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import React from 'react';
import { doc, getDoc } from "firebase/firestore";
import { database } from '../app/firebase';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { ContextBox } from '../App';
import module from './ProductPage.css'
import fon from '../assets/fon.png'
import like from '../assets/love.png'
import shop from '../assets/shop_2.png'


const ProductPage = (props) => {
    const id = useParams()
    const [product, setTowar] = useState(null)
    const [box, setBox] = useContext(ContextBox)
    console.log(product);
    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        const productRef = doc(database, "products", id.id);
        const productDoc = await getDoc(productRef);
        if (productDoc.exists()) {
            setTowar({ ...productDoc.data(), id: productDoc.id })
        } else {
            console.log("No such document!");
        }
    }

    function addToCart(event) {
        const currentCard = event.currentTarget.closest('.card')

        if (box.find(item => item.id === currentCard.querySelector('.id-card').dataset.id)) {
            const index = box.findIndex(item => item.id === currentCard.querySelector('.id-card').dataset.id)
            let nexBox = box;
            nexBox[index].count++;
            setBox(nexBox)
        } else {
            setBox([
                ...box,
                {
                    image: currentCard.querySelector('.card-img-top').getAttribute('src'),
                    title: currentCard.querySelector('.card-title').innerHTML,
                    // description: currentCard.querySelector('.card-text').innerHTML,
                    price: currentCard.querySelector('.price-product').innerHTML,
                    id: currentCard.querySelector('.id-card').dataset.id,
                    count: 1
                }
            ])
            alert("Оформление заказа была успешно");
        }
    }
    const showProduct = product ? (
        <div className='fon'>
            <div className= "block">
            <div className="id-card" data-id={product.id}></div>
                <div className="main_text"> {product.name}</div>
                <div className="container">
                    <div className="cont_1">
                        <img className="cont_1_img" src={product.photo}></img>
                    </div>
                    <div className= "cont_2">
                        <div className= "cont_2_text">{product.information}</div>
                        <div className= "infor">подробнее</div>
                    </div>
                </div>
                <div className= "kol">
                        {/* <div className= "kol_box">
                            <h3 className={module.h3}>кол-во:</h3>
                            <div className= "up">
                                <i class="fa-solid fa-angle-up"></i>
                                <i class="fa-solid fa-angle-down"></i>
                            </div>
                        </div> */}
                        <div className={module.icon}>
                            <img className="icon_like" src={like}></img>
                            <img className="icon_shop" src={shop}></img>
                        </div>
                </div>
                <div className= "form">
                            <div className= "karta2">
                                <Link to = '/vita/tovar'><button className= "karta" onClick={addToCart} >оформить сейчас <i class="fa-solid fa-arrow-right"></i></button></Link>
                            </div>
                        </div>
            </div>
        </div>
    ) : (
        <div className="loading">Подождите...</div>
    )

    return (
        
        <div>
            <div className="container_2">
                    {showProduct}
            </div>
        </div>
    )
};

export default ProductPage;
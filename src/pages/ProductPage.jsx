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
import module from './ProductPage.module.css'

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
        <div className={module.maincards}>
            <Card>
                <div className="id-card" data-id={product.id}></div>
                <h2 className={module.name}>
                    <Card.Title>
                        {product.name}
                    </Card.Title>
                </h2> <Card.Body>
                    <div className={module.main}>
                        <Card.Img variant="top" src={product.photo} />
                        <div className={module.description}>
                            <Card.Text>
                                {product.description}
                            </Card.Text>
                            <Card.Footer>
                                <div className={module.price}><span className="price-product">{product.price}</span>сом</div>
                                <button className={module.btncart} onClick={addToCart}>оформить сейчас</button>
                            </Card.Footer>
                        </div></div>
                </Card.Body>
            </Card>
        </div>
    ) : (
        <div className={module.loading}>Loading...</div>
    )

    return (
        <div>
            <div className={module.container}>
                <div className={module.main}>
                    {showProduct}
                </div>
            </div>
        </div>
    )
};

export default ProductPage;
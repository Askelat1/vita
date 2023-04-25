import module from './Category.module.css'
import { useParams } from "react-router-dom";
import { useEffect, useContext} from "react";
import { collection, query, getDocs, where } from "firebase/firestore";
import { database } from "../app/firebase";
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {ContextBox} from '../App'


const Category = (props) => {
    console.log("products")
    const id = useParams()
    console.log(useContext(ContextBox))
    const [products, setProducts] = useState([])
    const [box, setBox] = useContext(ContextBox)
    

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        const q = query(collection(database, "products"), where("idcategory", "==", id.category));
        const allProducts = await getDocs(q)
        let products = []
        allProducts.forEach(product => {
            products.push({...product.data(), id: product.id})
        })
        setProducts(products)
        console.log(products)
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
        }
    }

    const viewProducts = products.map((product, index) => {
        return (
            <Card text="1" key={index}>
                <div className="id-card" data-id={product.id}></div>
                <Card.Img className= {module.card_img} variant="top" src={product?.photo} />
                <Card.Body>
                    <div className={module.card_info}>
                    <Card.Title className={module.name}>{product.name}</Card.Title>
                    <div className='price-product'>{product.price}сом</div>
                    </div>
                    {/* <Card.Title className={module.name}>{product.name}</Card.Title> */}
                    {/* <Card.Text>
                    {product.description}
                    </Card.Text> */}
                </Card.Body>
                <Card.Footer>
                    <div>
                    <i class="fa-solid fa-arrow-right" className={module.archer}></i>
                    <button onClick={addToCart} className={module.but}>оформить сейчас</button>
                    {/* <div><button onClick={addToCart}>Добавить в корзину</button></div> */}
                    </div>
                    {/* <small className="text-muted">{product.price}сом</small> */}
                </Card.Footer>
            </Card>
        )
    })

    // const viewProducts = products.map((product, index) => {
    //     return (
    //         <Card text="123123" key={index}>
    //             <div className="id-card" data-id={product.id}></div>
    //             <Card.Img variant="top" src={product.photo} />
    //             <Card.Body>
    //                 <Card.Title>{product.name}</Card.Title>
    //                 <Card.Text>
    //                 {product.description}
    //                 </Card.Text>
    //             </Card.Body>
    //             <Card.Footer>
    //                 <small className="text-muted"><span className="price-product">{product.price}</span>$</small>
    //                 <div><button onClick={addToCart}>Добавить в корзину</button></div>
    //             </Card.Footer>
    //         </Card>
    //     )
    // })


    return (
        <div>
            <div className={module.container}>
                Страница категории
                <CardGroup className={module.card_group}>
                    {viewProducts}
                </CardGroup>
            </div>
        </div>
    )
};

export default Category;
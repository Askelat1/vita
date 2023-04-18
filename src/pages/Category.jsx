import Modal from "../components/Modal";
import Header from '../components/Header'
import Footer from '../components/Footer'
import module from './Category.module.css'
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { collection, query, getDocs, where } from "firebase/firestore";
import { database } from "../app/firebase";
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Category = (props) => {
    console.log("products")
    const id = useParams()
    const [products, setProducts] = useState([])

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        const q = query(collection(database, "products"), where("idcategory", "==", id.category));
        const allProducts = await getDocs(q)
        let products = []
        allProducts.forEach(product => {
            products.push(product.data())
        })
        setProducts(products)
        console.log(products)
    }

    

    const viewProducts = products.map((product, index) => {
        return (
            <Card text="1" key={index}>
                <Card.Img className= {module.card_img} variant="top" src={product.photo} />
                <Card.Body>
                    <div className={module.card_info}>
                    <Card.Title className={module.name}>{product.name}</Card.Title>
                    <div className="text-muted">{product.price}сом</div>
                    </div>
                    {/* <Card.Title className={module.name}>{product.name}</Card.Title> */}
                    {/* <Card.Text>
                    {product.description}
                    </Card.Text> */}
                </Card.Body>
                <Card.Footer>
                    <div>
                    <i class="fa-solid fa-arrow-right" className={module.archer}></i>
                    <button className={module.but}>оформить сейчас</button>
                    </div>
                    {/* <small className="text-muted">{product.price}сом</small> */}
                </Card.Footer>
            </Card>
        )
    })

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
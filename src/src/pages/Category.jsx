import Modal from "../components/Modal";
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { collection, query, getDocs, where } from "firebase/firestore";
import { database } from "../app/firebase";
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Category = (props) => {
    const id = useParams()
    const [products, setProducts] = useState([])

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        const q = query(collection(database, "product"), where("idCategory", "==", id.category));
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
            <Card text="123123" key={index}>
                <Card.Img variant="top" src={product.photo} />
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                    {product.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{product.price}$</small>
                </Card.Footer>
            </Card>
        )
    })

    return (
        <div>
            {/* <Header /> */}
            <div className="container">
                Страница категории
                <CardGroup>
                    {viewProducts}
                </CardGroup>
            </div>
            {/* <Footer /> */}
        </div>
    )
};

export default Category;
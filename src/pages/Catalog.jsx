import Header from "../components/Header"
import Footer from "../components/Footer"
import {useState, useEffect} from "react"
import CardComponent from "../components/CardComponent"
import module from "./Catalog.module.css"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { collection, query, getDocs } from "firebase/firestore";
import { database } from "../app/firebase";
import {Link} from 'react-router-dom'

const Catalog = (props) => {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getData();
        getDataProduct();
    }, [])

    // console.log(categories)
    // console.log(products)

    async function getData() {
        const q = query(collection(database, "category"));
        const querySnapshot = await getDocs(q);
        let category = []
        querySnapshot.forEach((doc) => {
            category.push({...doc.data(), id: doc.id})
            console.log(doc.id)
        });
        setCategories(category)
    }

    async function getDataProduct() {
        const r = query(collection(database, "products"));
        const querySnaphot = await  getDocs(r);
        let product = []
        querySnaphot.forEach((doc) => {
            product.push({...doc.data(), id: doc.id})
            // console.log(doc.id)
        });
        setProducts(product)
    }

    const showAllProducts = products.map((product, index) => {
        return (
            <CardGroup className={module.card_group}>
            <Card   text="1" key={index}>
                <Card.Img className= {module.card_img} variant="top" src={product?.photo} />
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
            </CardGroup>
            
        )
    })
    const showAllCategory = categories.map((categories, id) => {
        return (
            <Link to={`/category/${categories.id}`}>
                <Card text="123123" key={id}>
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text className={module.a}>
                        {categories.name}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        )
    })

    
    return (
        <div>
            <div>
                <div>
                    <div>{showAllCategory}</div>
                    <div>{showAllProducts}</div>
                </div>
            </div>
        </div>
    )
};

export default Catalog;
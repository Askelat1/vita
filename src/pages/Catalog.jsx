import {useState, useEffect, useContext} from "react"
import { useParams } from "react-router-dom";
import  "./Catalog.css"
import { collection, query, getDocs, where  } from "firebase/firestore";
import { database } from "../app/firebase";
import {ContextBox} from '../App'
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Catalog = (props) => {
    const id = useParams()
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [box, setBox] = useContext(ContextBox)

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
        const allProducts = await  getDocs(r);
        let product = []
        allProducts.forEach((doc) => {
            product.push({...doc.data(), id: doc.id})
            // console.log(doc.id)
        });
        setProducts(product)
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
            alert("Товар добавлен в корзину");
        }
    }

    const showAllProducts = products.map((product, index) => {
        return (
            <Card className="card_group" text="1" key={index}>
            <div className="id-card" data-id={product.id}>
                <Card.Img className= "card_img" variant="top" src={product.photo} />
                <Card.Body>
                    <div className="card_info">
                    <Card.Title className="name">{product.name}</Card.Title>
                    <div className='price-product'>{product.price}</div>сом
                    </div>
                </Card.Body>
                <Card.Footer>
                    <div>
                    <i class="fa-solid fa-arrow-right" className="archer"></i>
                    <button onClick={addToCart} className="but">оформить сейчас</button>
                    </div>
                    {/* <small className="text-muted">{product.price}сом</small> */}
                </Card.Footer>
            </div>
            </Card>
        )
    })
    const showAllCategory = categories.map((categories, id) => {
        return (
            <Link to={`/category/${categories.id}`}>
                <div className="category" text="123123" key={id}>
                    <div>
                        <div className="a">
                        {categories.name}
                        </div>
                    </div>
                </div>
            </Link>
        )
    })

    
    return (
        <div>
        <div>
            <div className="ter" >
                <div className="catalog_b">
                <div className="catalog_a"> 
                <div className="catalog_block">{showAllCategory}</div>
                </div>
                </div>
                <CardGroup className="card_group">
                {showAllProducts}
            </CardGroup>

            </div>
        </div>
    </div>
    )
};

export default Catalog;

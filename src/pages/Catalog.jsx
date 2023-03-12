import Header from "../components/Header"
import Footer from "../components/Footer"
import {useState, useEffect} from "react"
import CardComponent from "../components/CardComponent"
import module from "./Catalog.module.css"

const Catalog = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://66.42.79.23:9005/?format=openapi')
            .then(res=>res.json())
            .then(json => {
                setProducts(json);
            })
    }, [])

    const showAllProducts = products.map((product, index) => {
        console.log(product)
        return <CardComponent key={index} cardInfo={product} />
    })
    
    return (
        <div>
            <Header />
            <div className={module.containerCenter_flex}>
                <div className={module.catalog_list}>
                    {showAllProducts}
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Catalog;
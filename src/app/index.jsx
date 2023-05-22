import {createBrowserRouter} from "react-router-dom";
import Main from '../pages/Main.jsx'
import Catalog from '../pages/Catalog'
import ProductPage from '../pages/ProductPage'
import Category from "../pages/Category.jsx";
import Cart from '../pages/Cart'


const router = createBrowserRouter([
    {
        path: `/`,
        element: <Main />
    },
    {
        path: `/catalog`,
        element: <Catalog />
    },
    {
        path: `${path}/products/:id`,
        element: <ProductPage />
    },
    {
        path: `/category/:category`,
        element: (
            <div>
                123123
                <Category />
            </div>
        )
    },
    {
        path: `/cart`,
        element: <Cart />
    }
]);

export default router;
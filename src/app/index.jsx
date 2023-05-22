import {createBrowserRouter} from "react-router-dom";
import Main from '../pages/Main.jsx'
import Catalog from '../pages/Catalog'
import ProductPage from '../pages/ProductPage'
import Category from "../pages/Category.jsx";
import Cart from '../pages/Cart'

import Login from './pages/Login'
import Registration from './pages/Registration'
import NewPassword from './pages/NewPassword'
import MainOffice from './pages/MainOffice'
import Authorization from './pages/Authorization'
import Tovar from './pages/Tovar'
import Tovar_2 from './pages/Tovar_2'
import Katolog from './pages/Katolog'
import Content from './components/Content'
import Korzina from './pages/Korzina'
import Kabinet from './pages/Kabinet'
import MainPages from './pages/MainPages'
import About from './pages/AboutUs'
import Politics from './pages/Politics'


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
        path: `/products/:id`,
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
    },
    {
        path: `/login`,
        element: <Login />
    },
    {
        path: `/registration`,
        element: <Registration />
    },
    {
        path: `/newPassword`,
        element: <NewPassword />
    },
    {
        path: `/mainOffice`,
        element: <MainOffice />
    },
    {
        path: `/authorization`,
        element: <Authorization />
    },
    {
        path: `/tovar`,
        element: <Tovar />
    },
    {
        path: `/tovar_2`,
        element: <Tovar_2 />
    },
    {
        path: `/katolog`,
        element: <Katolog />
    },
    {
        path: `/korzina`,
        element: <Korzina />
    },
    {
        path: `/kabinet`,
        element: <Kabinet />
    },
    {
        path: `/katolog`,
        element: <Katolog />
    },
    {
        path: `/mainPages`,
        element: <MainPages />
    },
    {
        path: `/aboutUs`,
        element: <About />
    },
    {
        path: `/politics`,
        element: <Politics />
    }
    
]);

export default router;
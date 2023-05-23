import {createBrowserRouter} from "react-router-dom";
import Header from '../components/Header'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Main from '../pages/Main.jsx'
import Catalog from '../pages/Catalog'
import ProductPage from '../pages/ProductPage'
import Category from "../pages/Category.jsx";
import Cart from '../pages/Cart'

import Login from '../pages/Login'
import Registration from '../pages/Registration'
import NewPassword from '../pages/NewPassword'
import MainOffice from '../pages/MainOffice'
import Authorization from '../pages/Authorization'
import Tovar from '../pages/Tovar'
import Tovar_2 from '../pages/Tovar_2'
import Katolog from '../pages/Katolog'
import Korzina from '../pages/Korzina'
import Kabinet from '../pages/Kabinet'
import MainPages from '../pages/MainPages'
import About from '../pages/AboutUs'
import Politics from '../pages/Politics'


const router = createBrowserRouter([
    {
        path: `/vita/main`,
        element: (
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        )
    },
    {
        path: `/vita/catalog`,
        element:(
            <div>
                <Header />
                <Catalog />
                <Footer />
            </div>
        )
    },
    {
        path: `/vita/products/:id`,
        element:(
            <div>
                <Header />
                <ProductPage />
                <Footer />
            </div>
        ) 
    },
    {
        path: `/category/:category`,
        element: (
            <div>
                <Header />
                <Category />
                <Footer />
            </div>
        )
    },
    {
        path: `/vita/card`,
        element:(
            <div>
                <Header />
                <Cart />
                <Footer />
            </div>
        )
    },
    {
        path: `/vita/login`,
        element:(
            <div>
                <Header />
                <Login />
                <Footer />
            </div>
        )
    },
    {
        path: `/vita/registration`,
        element:(
            <div>
                <Header />
                <Registration />
                <Footer />
            </div>
        ) 
    },
    {
        path: `/vita/newPassword`,
        element:(
            <div>
                <Header />
                <NewPassword />
                <Footer />
            </div>
        ) 
    },
    {
        path: `/vita/mainOffice`,
        element:(
            <div>
                <Header />
                <MainOffice />
                <Footer />
            </div>
        ) 
    },
    {
        path: `/vita/authorization`,
        element: (
            <div>
                <Header />
                <Authorization />
                <Footer />
            </div>
        )
    },
    {
        path: `/vita/tovar`,
        element:(
            <div>
                <Header />
                <Tovar />
                <Footer />
            </div>
        ) 
    },
    {
        path: `/vita/tovar_2`,
        element:(
            <div>
                <Header />
                <Tovar_2 />
                <Footer />
            </div>
        ) 
    },
    {
        path: `/vita/katolog`,
        element:(
            <div>
                <Header />
                <Katolog />
                <Footer />
            </div>
        ) 
    },
    {
        path: `/vita/korzina`,
        element:(
            <div>
                <Header />
                <Korzina />
                <Footer />
            </div>
        ) 
    },
    {
        path: `/vita/kabinet`,
        element:(
            <div>
                <Header />
                <Kabinet />
                <Footer />
            </div>
        ) 
    },
    {
        path: `/vita/katolog`,
        element:(
            <div>
                <Header />
                <Katolog />
                <Footer />
            </div>
        )
    },
    {
        path: `/vita/mainPages`,
        element:(
            <div>
                <Header />
                <MainPages />
                <Footer />
            </div>
        ) 
    },
    {
        path: `/vita/aboutUs`,
        element:(
            <div>
                <Header />
                <About />
                <Footer />
            </div>
        ) 
    },
    {
        path: `/vita/politics`,
        element:(
            <div>
                <Header />
                <Politics />
                <Footer />
            </div>
        ) 
    }
    
]);

export default router;
import {useState, createContext, useEffect } from 'react'
import{Routes, Route,  Link} from 'react-router-dom'
import {RouterProvider} from 'react-router-dom'
import router from './app/index.jsx'
// import Header from './components/Header'
// import Footer from './components/Footer'
// import NavBar from './components/NavBar'


// import { Login } from './pages/Login'
// import Login from './pages/Login'
// import Registration from './pages/Registration'
// import NewPassword from './pages/NewPassword'
// import MainOffice from './pages/MainOffice'
// import Authorization from './pages/Authorization'
// import Main from './pages/Main'
// import Tovar from './pages/Tovar'
// import Tovar_2 from './pages/Tovar_2'
// import Katolog from './pages/Katolog'
// import ProductPage from './pages/ProductPage'
// import Catalog from './pages/Catalog'
// import Category from './pages/Category'
// import Content from './components/Content'
// import Korzina from './pages/Korzina'
// import Kabinet from './pages/Kabinet'
// import MainPages from './pages/MainPages'
// import Cart from './pages/Cart'
// import About from './pages/AboutUs'
// import Politics from './pages/Politics'

// import './App.css'
const ContextBox = createContext()
export {ContextBox}


function App() {
  const [box, setBox] = useState([])

  useEffect(() => {
    if (box.length != 0)
      localStorage.setItem('box', JSON.stringify(box))
  }, [box])

  useEffect(() => {
    let basket = localStorage.getItem('box')? localStorage.getItem('box') : '[]'
    let parseBasket = JSON.parse(basket)
    setBox(parseBasket)
  }, [])

  console.log(box)

  return (
    <div className="App">/
      <ContextBox.Provider value={[box, setBox]}>
        <RouterProvider
          router={router}
        />

      </ContextBox.Provider>
    </div>

  )
}

export default App

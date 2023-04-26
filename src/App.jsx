import {useState, createContext, useEffect } from 'react'
import{Routes, Route,  Link} from 'react-router-dom'
import {RouterProvider} from 'react-router-dom'
import router from './app/index.jsx'
import Header from './components/Header'
import Footer from './components/Footer'


// import { Login } from './pages/Login'
import Login from './pages/Login'
import Registration from './pages/Registration'
import NewPassword from './pages/NewPassword'
import MainOffice from './pages/MainOffice'
import Authorization from './pages/Authorization'
import Main from './pages/Main'
import Tovar from './pages/Tovar'
import Tovar_2 from './pages/Tovar_2'
import Katolog from './pages/Katolog'
import ProductPage from './pages/ProductPage'
import Catalog from './pages/Catalog'
import Category from './pages/Category'
import Content from './components/Content'
import Korzina from './pages/Korzina'
import Kabinet from './pages/Kabinet'
import MainPages from './pages/MainPages'

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
        {/* <RouterProvider
          router={router}
        /> */}
      
        <Header />
        <Routes>

          <Route path='/regist' element ={<Registration />}/>
          <Route path='/removePass' element ={<Login />}/>
          <Route path='/newPass' element ={<NewPassword />}/>
          <Route path='/mainOffice' element ={<MainOffice />}/>
          <Route path='/authorization' element ={<Authorization />}/>
          <Route path='/main' element ={<Main />}/>
          <Route path='/tovar' element ={<Tovar />}/>
          <Route path='/tovar_2' element ={<Tovar_2 />}/>
          <Route path='/katolog' element ={<Katolog />}/>
          <Route path='/productPage' element ={<ProductPage />}/>
          <Route path='/catalog' element ={<Catalog />}/>
          <Route path='/category/:category' element ={<Category />}/>
          <Route path='/content' element ={<Content />}/>
          <Route path='/korzina' element ={<Korzina />}/>
          <Route path='/kabinet' element ={<Kabinet />}/>
          <Route path='/' element ={<MainPages />}/>
        </Routes>
        {/* <Login /> */}
        <Footer />
      </ContextBox.Provider>
    </div>

  )
}

export default App

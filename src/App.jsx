import { useState } from 'react'
import{Routes, Route, Link} from 'react-router-dom'
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

// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      {/* <Content /> */}
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
      </Routes>
      {/* <Login /> */}
      <Footer />
    
    </div>

  )
}

export default App

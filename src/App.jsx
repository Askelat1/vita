import { useState } from 'react'
import{Routes, Route, Link} from 'react-router-dom'
import Header from './components/Header'
import Content from './components/Content'
// import { Login } from './pages/Login'
import Login from './pages/Login'
import Registration from './pages/Registration'
import NewPassword from './pages/NewPassword'
import MainOffice from './pages/MainOffice'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      {/* <Content /> */}
      <Routes>
        <Route path='/regist' element ={<Registration />}/>
        <Route path='/' element ={<Login />}/>
        <Route path='/newPass' element ={<NewPassword />}/>
        <Route path='/mainOffice' element ={<MainOffice />}/>
      </Routes>
      {/* <Login /> */}
    </div>
  )
}

export default App

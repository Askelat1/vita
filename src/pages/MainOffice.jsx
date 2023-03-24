import {useForm} from "react-hook-form";
import module from './MainOffice.module.css'
import google from '../assets/google.png'
import face from '../assets/facebook.png'
import inst from '../assets/inst.png'
import app from '../assets/apple.png'
import vite from '../assets/logo.png'
import {useState} from 'react'
import {auth, provider, providerFacebook} from '../app/firebase'
import {signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

const MainOffice = (props) => {
      const [login, setLogin] = useState('')
      const [password, setPassword] = useState('')
      const [error, setError] = useState(false)
      const navigateTo = useNavigate();

      async function signInWithGoogle() {
      try {
            await signInWithPopup(auth, provider)
            navigateTo('/main/art')
            props.closeModal({ type: "modal", active:"false"})
      } catch (error) {
            console.log(error)
      }
      }

      async function signInWithFacebook() {
      try {
            await signInWithPopup(auth, providerFacebook)
            props.closeModal({ type: "modal", active:"false"})
      } catch (error) {
            console.log(error)
      }
      }

      async function signIn(e) {
      e.preventDefault()
      try {
            setError(false)
            await signInWithEmailAndPassword(auth, login, password)
            navigateTo('/main')
      } catch(error) {
            setError(true)
      }
      }

      function inputLogin(e) {
            setLogin(e.target.value)
      }

      function inputPassword(e) {
            setPassword(e.target.value)
      }


// function MainOffice(props) {
//       const {register, handleSubmit, watch, formState: { errors } } = useForm();

//       const onSubmit = async data => {
//             console.log(data)
//       }

      // console.log(errors)
      return (
            <div className={module.logos}>
                  <img className={module.vita} src={vite} />
                  <div className={module.enter}>
                        <h1 className={module.h1}>
                              Вход в личный кабинет
                        </h1>
                  </div>
                  <div className={module.error} style={{
            display: (error) ? 'block' : 'none',
            color: 'red'
            }}> 
            Такого пользователя не существует, проверьте введеный логин и пароль 
            </div>
                  <div className={module.email}>
                        <form className={module.email_1} onSubmit={signIn}>
                        <div>
                        <label htmlFor="login"></label>
                        <input className={module.почта} type="text" name="login" placeholder="введите логин или почту" onChange={inputLogin}/>
                        {/* <input className={module.почта}
                        type="text" 
                        name="email" 
                        placeholder="Введите e-mail"
                        {...register("email", {
                              required: "Параметр обязателен",
                              pattern: {
                                    value: /\S+@\S+\.\S+/,
                                    message: "Ваш email не подходит под нужный формат"
                              }
                        })}
                        />
                        {errors.email && <span className={module.error} role="alert">{errors.email?.message}</span>} */}
                  </div>
                  <div>
                  <label htmlFor="password"></label>
                  <input className={module.psw} type="password" name="password" placeholder="введите пароль" onChange={inputPassword}/>
                        {/* <input className={module.psw}
                        type="password" 
                        name="password" 
                        placeholder="Введите пароль"
                        {...register("password", {
                              required: "Параметр обязателен",
                              minLength: {
                                    value: 5,
                                    message: "Минимальная длина пароля 5 символов"
                              }
                        })}
                        />
                        {errors.password && <span className={module.error} role="alert">{errors.password?.message}</span>} */}
                  </div>
                        <label htmlFor="login"></label>
                        <input className={module.click} type="submit" value="Войти"/>
                        <a href="/newPass" className={module.parol}>забыли пароль?</a>
                              {/* <input type="password" placeholder="Enter Password" className={module.psw} required></input> */}
                              {/* <button className={module.click}>Войти</button>
                              <a href="/newPass" className={module.parol}>забыли пароль?</a> */}
                              
                        </form>
                        <div >
                              <button onClick={signInWithGoogle}  className={module.google_b1}><img  src={google} alt="" className={module.classes} />Войти с помощью Google</button>
                              <button onClick={signInWithFacebook} className={module.google_b}><img  src={face} alt="" className={module.classes} />Войти с помощью Google</button>
                              <button className={module.google_b}><img  src={app} alt="" className={module.classes} />Войти с помощью Google</button>

                        </div>
                  </div>
                  
                  <h2> Еще нет аккаунта?</h2>
                  <a href="/regist" className={module.reg}>Зарегистрироваться</a>
            </div>
      )
}

export default MainOffice;
import google_image from '../assets/google.png'
import facebook_image from '../assets/facebook.png'
import {auth, provider, providerFacebook} from '../app/firebase'
import {signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth'
import {useState} from 'react'
import module from './Authorization.module.css'
import { useNavigate } from 'react-router-dom';

const Authorization = (props) => {
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

    return (
        <div className={module.form_modal}>
            <div className={module.title_modal}>Авторизация</div>
            <div className={module.error} style={{
                display: (error) ? 'block' : 'none',
                color: 'red'
            }}> 
                Такого пользователя не существует, проверьте введеный логин и пароль 
            </div>
            <form onSubmit={signIn}>
                <div>
                    <label htmlFor="login"></label>
                    <input type="text" name="login" placeholder="введите логин или почту" onChange={inputLogin}/>
                </div>
                <div>
                    <label htmlFor="password"></label>
                    <input type="password" name="password" placeholder="введите пароль" onChange={inputPassword}/>
                </div>
                <div>
                    <label htmlFor="login"></label>
                    <input type="submit" value="Отправить"/>
                </div>
                <div>
                    <img style={{
                            maxWidth: '100%', 
                            width: '32px',
                            marginTop: '16px',
                            display: 'block',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            cursor: 'pointer'
                        }}
                        src={google_image} 
                        alt="" 
                        onClick={signInWithGoogle} />

                    <img style={{
                                maxWidth: '100%', 
                                width: '32px',
                                marginTop: '16px',
                                display: 'block',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                cursor: 'pointer'
                            }}
                        src={facebook_image} 
                        alt="" 
                        onClick={signInWithFacebook} />
                </div>
            </form>
        </div>
    )

};

export default Authorization
import Button from "../components/ui/Button.jsx";
import { useReducer } from 'react'
import Modal from "../components/Modal";
import module from "./Main.module.css"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from '../app/firebase'
import {Link} from 'react-router-dom'
import fon2 from '../assets/fon2.png'
import userPhoto from '../assets/user.png'
import fonf from '../assets/fonf.png'

const Main = (props) => {
    const [modal, dispatch] = useReducer(reducer, {
        active: false,
        content: 'registration'
        });

    const [user, loading, error] = useAuthState(auth);

    function reducer(state, action) {
        switch (action.type) {
            case 'modal':
                return {
                    ...state,
                    active: action.modal
                };
            case 'content':
                return {
                    ...state,
                    content: action.content
                };
            default:
                return state
        }
    }

    const modalState = {
        props: modal,
        dispatch: dispatch,
    }

    async function openModal(content) {
        await dispatch({type: 'content', content: content})
        await dispatch({type: 'modal', modal: true})
    }

    const signOut = () => {
        auth.signOut();
    };

    if (user) {
        return (
            <div className={module.container_center_flex}>
                <div>
            <div className={module.fons}>
                <h2 className={module.h2}>Личный кабинет</h2>
            <img className={module.fon2} src={fon2}></img>
            </div>
            <div className={module.block1}>
                <img src={userPhoto} alt="" />
                <div className={module.Name}>
                    <h1 className={module.h1}>Имя</h1>
                    <h3 className={module.h3}>+996 5003 208 700</h3>
                    <h3 className={module.h3}>Мой город: Бишкек</h3>
                    <div onClick={signOut}>
                    <Button text='Выйти с аккаунта' />
                </div>
                </div>
                <div className={module.block_h4}>
                    <Link to=""><h4>Избранные товары</h4></Link>
                    <i class="fa-regular fa-heart"></i>
                </div>
            </div>
            <div>
                <img className={module.fonf} src={fonf} alt="" />
            </div>
        </div>
                {/* Главная страница
                <div>Поздравляю, вы вошли в свой аккаунт {user.displayName}</div>
                <div>Ваша почта: {user.email}</div>
                <div onClick={signOut}>
                    <Button text='Выйти с аккаунта' />
                </div> */}
            </div>
        )
    } else {(
        <div className="container center-flex">
            Главная страница
            <div>Вам нужно подтвердить почту</div>
            <div onClick={signOut}>
                <Button text='Выйти с аккаунта' />
            </div>
        </div>
    )
    }
};

export default Main;
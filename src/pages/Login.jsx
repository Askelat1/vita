import module from './Login.module.css'
import logo from '../assets/logo.png'
import {useForm} from 'react-hook-form'

function Login (props) {
    const {register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = async data => {
        console.log(data)
    }
    return (
        <div className ={module.login_block}>
            <img src={logo} alt="" />
            <div className={module.login_text}>Сброс пароля</div>
            <div className={module.login_email}>
            <form className={module.form_input} onSubmit={handleSubmit(onSubmit)}>
                    <label className={module.input_name} htmlFor="email">E-mail: </label>
                    <input  type="text" name={module.email} placeholder="Введите почту"
                        {...register("email", {
                            required: "Параметр обязателен",
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Ваш email не подходит под нужный формат"
                            }
                        })}
                    />
                    {errors.email && <span className={module.error} role="alert">{errors.email?.message}</span>}
                    <div className={module.regist}>
                    <label htmlFor="submit"></label>
                    <input className={module.remove_password_text} type="submit" name={module.submit} value="Получить код"/>
                </div>
                </form>
            </div>
        </div>

        // <div className={module.logo_head}>
        //     <img className={module.logo} src ={logo}/>
        //     <div className={module.recover_password}>
        //         <div className={module.text}>Сброс пароля</div>
        //         <form className={module.logo__input} action="">
        //             <input className= {module.input_text} type="email" placeholder="Введите почту" />
        //         </form>
        //         <div className= {module.get}>
        //         <button className={module.get_text}>Получить</button>
        //         </div>
        //     </div>
        // </div>
        
    )
}

export default Login;
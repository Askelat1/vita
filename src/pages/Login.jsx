import {useForm} from "react-hook-form";
import module from './Login.css'
import logo from '../assets/logo.png'

function Login (props) {
    const {register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = async data => {
        console.log(data)
    }
    return (
        <div className ='login_block'>
            <img src={logo} alt="" />
            <div className='login_text'>Сброс пароля</div>
            <div className="login_email">
            <form className="form-input" onSubmit={handleSubmit(onSubmit)}>
                    <label className="input_name" htmlFor="email">E-mail: </label>
                    <input  type="text" name="email" placeholder="Введите почту"
                        {...register("email", {
                            required: "Параметр обязателен",
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Ваш email не подходит под нужный формат"
                            }
                        })}
                    />
                    {errors.email && <span className="error" role="alert">{errors.email?.message}</span>}
                <div className="regist">
                    <label htmlFor="submit"></label>
                    <input className="remove-password-text" type="submit" name="submit" value="Получить код"/>
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
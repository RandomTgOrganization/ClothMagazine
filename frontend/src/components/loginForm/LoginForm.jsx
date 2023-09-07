import styles from './LoginForm.module.css'
import { loginThunk } from '../../thunks/loginThunk';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';





const LoginForm = () => {

    const dispatch = useDispatch()
    const {user} = useSelector(state => state.auth)


    async function handleLoginFormSubmit(event) {
        event.preventDefault();

        const email = event.target.email.value
        const password = event.target.password.value

        const credentialsData = {
            username: email,
            password: password
        }

    
        dispatch(loginThunk(credentialsData))
    }





    return (

        
        <div>

        {user ? (<Navigate to="/" />) : (
                    
        <div className={styles.div_registration}> 
            <form className={styles.form} onSubmit={handleLoginFormSubmit}>
                <h2 className={styles.enter_label}>Авторизация</h2>
                <label htmlFor="email"><h4>Электронная почта:</h4></label>
                <input type="email" id="email" name="email" required />


                <label htmlFor="password"> <h4>Пароль:</h4></label>
                <input type="password" id="password" name="password" required />

                <button type="submit">Войти</button>
                <button type="button">Забыл пароль?</button>
            </form>
        </div>
        )}

        </div>
    );
}

export default LoginForm;

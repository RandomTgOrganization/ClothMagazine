// import styles from './LoginForm.module.css'
// import { Navigate } from 'react-router-dom';
// import { useActions } from '../../../customHooks/useActions';




// const LoginForm = () => {





//     return (
//         <>
//             {user ? (<Navigate to="/" />) :
//                 (
                    
//                     <div className={styles.div_registration}> 
//                         <form className={styles.form} onSubmit={handleLoginFormSubmit}>
//                             <h2 className={styles.enter_label}>Авторизация</h2>
//                             <label htmlFor="email">Электронная почта:</label>
//                             <input type="email" id="email" name="email" required />


//                             <label htmlFor="password">Пароль:</label>
//                             <input type="password" id="password" name="password" required />

//                             <button type="submit">Войти</button>
//                             <button type="button">Забыл пароль?</button>
//                         </form>

//                         {!loading ? <h1>Неверный логин или пароль</h1> : ''}
//                     </div>
//                 )}
//         </>
//     );
// }

// export default LoginForm;

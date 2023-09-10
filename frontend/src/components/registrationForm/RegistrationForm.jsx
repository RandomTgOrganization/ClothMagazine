import styles from './RegistrationForm.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, } from 'react-router-dom'
import { registerThunk } from '../../thunks/registerThunk'

function RegistrationForm() {

    const {user} = useSelector(state => state.auth)
    const dispatch = useDispatch()


    const  handleRegisterFormSubmit =  async (event) => {

        event.preventDefault();

        const email = event.target.email.value
        const password = event.target.password.value
        const repeat_password = event.target.repeat_password.value
        const username = event.target.username.value


        const registerData ={

            username:username,
            email:email,
            password:password,
            repeat_password:repeat_password

        }


        try {
            dispatch(registerThunk(registerData));
          } catch (e) {
            console.log(e);
          }
        }





  return (

    <>

    {!user ?  (<>
        <div className={styles.div_registration}>
    
    <form className={styles.form} onSubmit={handleRegisterFormSubmit} >
  <h2>Регистрация</h2>
  <label htmlFor="email"> <h4>Электронная почта:</h4></label>
  <input type="text" id="email" name="email" required/>

  <label htmlFor="username"><h4>Имя Пользователя:</h4></label>
  <input type="username" id="username" name="username" required />


  <label htmlFor="password"><h4>Пароль:</h4></label>
  <input type="password" id="password" name="password" required/>

  <label htmlFor="repeat_password"><h4>Повторите пароль:</h4></label>
  <input type="password" id="repeat_password" name="repeat_password" required/>

  <button type="submit">Регистрация</button>
</form>

</div> </>) : (<Navigate to="/" />) }




</>

  )
}

export default RegistrationForm
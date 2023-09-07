import { useSelector } from 'react-redux';
import styles from './Navbar.module.css';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/slices/authSlice';







function Navbar() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user}  = useSelector(state => state.auth)


  const handleLogout = () => {
    
    dispatch(authActions.logout())
    navigate('/');
};




  return (
    <div>
      <nav className={styles.navbar}>

        <a href="/" className={styles.navbar_brand}>
          Тестовый Магазин
        </a>

        <a href='#'>
        <div className={styles.cash}>
          <FaShoppingCart className={styles.cartIcon} /> Корзина
        </div>
        </a>
        
        <ul className={styles.navbar_links}>

        <li>
            <input className={styles.search_input}
 type='text' placeholder='поиск'/>
          </li>

          <li>
            <a href="/" className={styles.navbar_link}>
              Главная
            </a>
          </li>

          {!user ? (<div><li>
            <a href="/login" className={styles.navbar_link}>
              Войти
            </a>
          </li>

          <li>
            <a href="#" className={styles.navbar_link}>
              Регистрация
            </a>
          </li>
          </div>) : ( <li><button onClick={handleLogout} >Выход</button></li>
) }



        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

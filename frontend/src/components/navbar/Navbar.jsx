import styles from './Navbar.module.css';
import { FaShoppingCart } from 'react-icons/fa';







function Navbar() {
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
            <a href="#" className={styles.navbar_link}>
              Главная
            </a>
          </li>

          <li>
            <a href="#" className={styles.navbar_link}>
              Войти
            </a>
          </li>

          <li>
            <a href="#" className={styles.navbar_link}>
              Регистрация
            </a>
          </li>
          <li>
            <a href="#" className={styles.navbar_link}>
              Корзина
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

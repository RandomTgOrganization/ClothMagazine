import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div>
      <nav className={styles.navbar}>
        <a href="/" className={styles.navbar_brand}>
          Тестовый Магазин
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
              Продукты
            </a>
          </li>
          <li>
            <a href="#" className={styles.navbar_link}>
              Войти
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

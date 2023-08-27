import styles from './Sidebar.module.css'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import './custom.toltip.css'

function Sidebar() {
  return (
    <div>
      <div className={styles.sidebar}>
        <a href="#" className={styles.topBrands}> ТОП БРЕНДЫ </a>
        <a href="#" data-tip data-for="clothingTooltip">
          ОДЕЖДА
        </a>
        <a href="#">ОБУВЬ</a>
        <a href="#">СКИДКИ</a>
        <a href="#">КОНТАКТЫ</a>

        <a href="#" className={styles.language }>Поменять язык: | RU |</a>
      </div>

      <ReactTooltip id="clothingTooltip" effect="solid">
        <ul>
          <li>пример один</li>
        </ul>
      </ReactTooltip>
    </div>
  )
}

export default Sidebar;

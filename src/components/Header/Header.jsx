import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.wrapper}>
      <Link to="/">
        <button className={styles.button}>Форма</button>
      </Link>
      <Link to="/color">
        <button className={styles.button}>Палитра</button>
      </Link>
    </div>
  );
}

export default Header;

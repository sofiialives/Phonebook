import { Link } from 'react-router-dom';
import css from './Navigation.module.css';

export function Navigation() {
  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        <li>
          <Link to="/register" className={css.link}>
            Register
          </Link>
        </li>
        <li>
          <Link to="/login" className={css.link}>
            Login
          </Link>
        </li>
        <li>
          <Link to="/contacts" className={css.link}>
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
}

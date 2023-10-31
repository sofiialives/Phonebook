import { Link } from 'react-router-dom';
import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        <li className={css.li}>
          <Link to="/" className={css.link}>
            Home
          </Link>
        </li>
        {isLoggedIn && <li className={css.li}>
          <Link to="/contacts" className={css.link}>
            Contacts
          </Link>
        </li>}
        
      </ul>
    </nav>
  );
}

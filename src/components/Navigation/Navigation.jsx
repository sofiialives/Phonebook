import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
      <ul className={css.list}>
        <li className={css.li}>
          <NavLink to="/" className={css.link}>
            Home
          </NavLink>
        </li>
        {isLoggedIn && (
          <li className={css.li}>
            <NavLink to="/contacts" className={css.link}>
              Contacts
            </NavLink>
          </li>
        )}
      </ul>
  );
}

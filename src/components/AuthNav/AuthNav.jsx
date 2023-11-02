import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <ul className={css.list}>
      <li className={css.li}>
        <NavLink to="/register" className={css.link}>
          Register
        </NavLink>
      </li>
      <li className={css.li}>
        <NavLink to="/login" className={css.link}>
          Login
        </NavLink>
      </li>
    </ul>
  );
};

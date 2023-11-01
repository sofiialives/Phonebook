import { Link } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <ul className={css.list}>
      <li className={css.li}>
        <Link to="/register" className={css.link}>
          Register
        </Link>
      </li>
      <li className={css.li}>
        <Link to="/login" className={css.link}>
          Login
        </Link>
      </li>
    </ul>
  );
};
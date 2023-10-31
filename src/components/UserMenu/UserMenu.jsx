import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import css from './UserMenu.module.css'

export const UserMenu = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
  return (
    <div className={css.div}>
      <p className={css.title}>Welcome, {user.name}</p>
      <button className={css.but} type="submit" onClick={() => dispatch(logOut())}>Logout</button>
    </div>
  );
};

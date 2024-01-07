import { useSelector } from 'react-redux';
import css from './Welcome.module.css';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Loading } from 'components/Loading';
import { selectError, selectLoading } from 'redux/contacts/selectors';
import { NavLink } from 'react-router-dom';

const Welcome = () => {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.div}>
      {isLoading && <Loading />}
      {error && 'something went wrong'}
      <h1 className={css.title}>
        {isLoggedIn ? (
          `Enjoy using your own phonebook \u2191`
        ) : (
          <>
            Hi! Let's <NavLink to="/register">Sign Up</NavLink> or{' '}
            <NavLink to="/login">Log In</NavLink> &uarr;
          </>
        )}
      </h1>
    </div>
  );
};

export default Welcome;

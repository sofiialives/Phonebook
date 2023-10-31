import { useSelector } from 'react-redux';
import css from './Welcome.module.css';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const Welcome = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.div}>
      <h1 className={css.title}>
        {isLoggedIn
          ? `Enjoy using your own phonebook \u2191`
          : `Hi! Let's Sign Up or Log In \u2191`}
      </h1>
    </div>
  );
};

export default Welcome;

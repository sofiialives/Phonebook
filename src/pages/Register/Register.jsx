import { useDispatch, useSelector } from 'react-redux';
import css from './Register.module.css';
import { register } from 'redux/auth/operations';
import { selectError, selectLoading } from 'redux/contacts/selectors';
import { Loading } from 'components/Loading';

const Register = () => {
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      register({
        name: e.target.elements.name.value,
        email: e.target.elements.email.value,
        password: e.target.elements.password.value,
      })
    );
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.password.value = '';
  };

  return (
    <>
      {isLoading && <Loading />}
      {error && 'something went wrong'}
      <form className={css.form} onSubmit={handleSubmit}>
        <h1 className={css.title}>Registration</h1>
        <ul className={css.list}>
          <li>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className={css.input}
            />
          </li>
          <li>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={css.input}
            />
          </li>
          <li>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className={css.input}
            />
          </li>
        </ul>
        <button type="submit" className={css.button}>
          Registrate
        </button>
      </form>
    </>
  );
};

export default Register;

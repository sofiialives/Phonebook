import css from './Login.module.css';

export const Login = () => {
  return (
    <div>
      <form className={css.form}>
        <h1 className={css.title}>Login</h1>
        <ul className={css.list}>
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
          Login
        </button>
      </form>
    </div>
  );
};

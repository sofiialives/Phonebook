import css from './Register.module.css';
export const Register = () => {
  const handleSubmit = e =>{
    e.preventDefault()
    const newUser = {
      name: e.target.elements.name.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value
    }
    console.log(newUser)
  }
  return (
    <div className={css.div}>
      <form className={css.form}>
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
        <button type="submit" className={css.button} onSubmit={handleSubmit}>
          Registrate
        </button>
      </form>
    </div>
  );
};

import classes from './Register.module.scss'

export default function Register() {
  return (
    <div className={classes.register}>
      <h1 className={classes.register__title}>Register</h1>
      <form className={classes.register__form}>
        <input type='text' placeholder='username' />
        <input type='text' placeholder='email' />
        <input type='password' placeholder='password' />
        <input type='password' placeholder='confirm password' />
        <button className={classes.register__form__register}>Register</button>
      </form>
      <button className={classes.register__form__login}>Login</button>
    </div>
  )
}

import { Link } from 'react-router-dom'
import classes from './Login.module.scss'

export default function Login() {
  return (
    <div className={classes.login}>
      <h1 className={classes.login__title}>Login</h1>
      <form className={classes.login__form}>
        <input type='text' placeholder='email' />
        <input type='password' placeholder='password' />
        <button className={classes.login__form__login}>Login</button>
      </form>
      <Link className={classes.login__form__register} to='/register'>Register</Link>
    </div>
  )
}

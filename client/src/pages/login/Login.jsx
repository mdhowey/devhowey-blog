import { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context';
import classes from './Login.module.scss'
import axios from 'axios';

export default function Login() {

  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type: 'LOGIN_START'});
    try {
      const res = await axios.post('/auth/login', {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
      res.data && window.location.replace('/');
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE' });
    }
  };

  return (
    <div className={classes.login}>
      <h1 className={classes.login__title}>Login</h1>
      <form 
        className={classes.login__form}
        onSubmit={handleSubmit}>
        <input 
          type='text' 
          placeholder='username' 
          ref={userRef}
        />
        <input 
          type='password' 
          placeholder='password' 
          ref={passwordRef}
        />
        <button 
          className={classes.login__form__login}
          type='submit'
          disabled={isFetching}>Login</button>
      </form>
      <Link 
        className={classes.login__form__register} 
        to='/register'
        >Register</Link>
    </div>
  )
}

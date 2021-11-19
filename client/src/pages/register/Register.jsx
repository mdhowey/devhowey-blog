import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import classes from './Register.module.scss';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    // prevents refreshing the page on submit
    e.preventDefault();
    setError(false);
    try{
      const res = await axios.post(`/auth/register`, {
        username,
        email,
        password,
      });
      // no error and data --> redirect to login
      res.data && window.location.replace('/login');
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className={classes.register}>
      <h1 className={classes.register__title}>Register</h1>
      {error && <span className={classes.register__error}>
        Username or email already in use
      </span>}
      <form 
        className={classes.register__form}
        onSubmit={handleSubmit}>
        <input 
          type='text' 
          placeholder='username' 
          onChange={e => setUsername(e.target.value)}
        />
        <input 
          type='text' 
          placeholder='email' 
          onChange={e => setEmail(e.target.value)}
        />
        <input 
          type='password' 
          placeholder='password' 
          onChange={e => setPassword(e.target.value)}
        />
        <button 
          className={classes.register__form__register}
          type='submit'>Register</button>
      </form>
      <Link to='/login' className={classes.register__form__login}>Login</Link>
    </div>
  )
}

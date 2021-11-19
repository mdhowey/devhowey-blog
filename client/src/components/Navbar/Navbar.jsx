import classes from './Navbar.module.scss';
import {BsGithub} from 'react-icons/bs';
import {AiOutlineLinkedin} from 'react-icons/ai';
import {BsSearch} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/Context';

export default function Navbar() {
  const { dispatch, user }= useContext(Context);

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  }

  return (
    <div className={classes.navbar}>
      <div className={classes.navbar__topleft}>
        <BsGithub className={classes.navbar__topleft__topicon}/>
        <AiOutlineLinkedin className={classes.navbar__topleft__topicon}/>
      </div>
      <div className={classes.navbar__topcenter}>
        <ul className={classes.navbar__topcenter__navmenu}>
          <li>
            <Link className={classes.navbar__topcenter__navmenu__navitem} to='/'>about</Link>
          </li>
          <li>
            <Link className={classes.navbar__topcenter__navmenu__navitem} to='/'>projects</Link>
          </li>
          <li>
            <Link className={classes.navbar__topcenter__navmenu__navitem} to='/'>contact</Link>
          </li>
        {user &&
          <>
            <li>
              <Link className={classes.navbar__topcenter__navmenu__navitem} to='/newblog'>new blog</Link>
            </li>
            <li>
                <Link 
                className={classes.navbar__topcenter__navmenu__navitem} 
                onClick={handleLogout}
                to='/'>logout</Link>
            </li>
          </>
        }
        </ul>
      </div>
      <div className={classes.navbar__topright}>
        {
          user ? (
            <img 
              className={classes.navbar__topright__topimg} 
              src={user.proilePic}
              alt='test profile'
              />
          ) : (
            <>
              <Link className={classes.navbar__topright__nouser} to='/login'>login</Link>
              <Link className={classes.navbar__topright__nouser} to='/register'>register</Link>
            </>
          )
        }
        <BsSearch className={classes.navbar__topright__search}/>
      </div>
    </div>
  )
}

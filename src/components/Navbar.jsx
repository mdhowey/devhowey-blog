import classes from './Navbar.module.scss';
import {BsGithub} from 'react-icons/bs';
import {AiOutlineLinkedin} from 'react-icons/ai';
import {BsSearch} from 'react-icons/bs';

export default function Navbar() {
  return (
    <div className={classes.navbar}>
      <div className={classes.navbar__topleft}>
        <BsGithub className={classes.navbar__topleft__topicon}/>
        <AiOutlineLinkedin className={classes.navbar__topleft__topicon}/>
      </div>
      <div className={classes.navbar__topcenter}>
        <ul className={classes.navbar__topcenter__navmenu}>
          <li className={classes.navbar__topcenter__navmenu__navitem}>home</li>
          <li className={classes.navbar__topcenter__navmenu__navitem}>about</li>
          <li className={classes.navbar__topcenter__navmenu__navitem}>contact</li>
          <li className={classes.navbar__topcenter__navmenu__navitem}>write</li>
          <li className={classes.navbar__topcenter__navmenu__navitem}>logout</li>
        </ul>
      </div>
      <div className={classes.navbar__topright}>
        <img 
          className={classes.navbar__topright__topimg} 
          src='https://st3.depositphotos.com/5326338/12864/i/950/depositphotos_128646326-stock-photo-actor-steve-howey.jpg' 
          alt='test profile'
          />
        <BsSearch className={classes.navbar__topright__search}/>
      </div>
    </div>
  )
}

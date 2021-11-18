import classes from './ProfileSettings.module.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import {FaUserSecret} from 'react-icons/fa'

export default function ProfileSettings() {
  return (
    <div className={classes.settings}>
      <div className={classes.settings__wrapper}>
        <div className={classes.settings__wrapper__title}>
          <div className={classes.settings__wrapper__title__update}>Update Account</div>
          <div className={classes.settings__wrapper__title__delete}>Delete Account</div>
        </div>
        <form className={classes.settings__wrapper__form}>
          <label>Profile Picture</label>
          <div className={classes.settings__wrapper__form__ppic}>
            <img 
              src='https://www.thomascook.com/.imaging/mte/thomascook-theme/og-image/dam/legacy/compressed-jpg/sunny-beach-resort-hero1.jpg/jcr:content/sunny-beach-resort-hero1.jpg' 
              alt='sunny beach' 
            />
            <label htmlFor='ppicInput'>
              <FaUserSecret className={classes.settings__wrapper__form__ppic__icon}/>
            </label>
            <input type='file' id='ppicInput' style={{display:'none'}}/>
          </div>
          <label>Username</label>
          <input type='text' placeholder='devhowey'/>
          <label>Email</label>
          <input type='email' placeholder='devhowey@gmail.com'/>
          <label>Password</label>
          <input type='password'/>
          <button className={classes.settings__wrapper__form__submit}>Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}

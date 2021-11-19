import classes from './Header.module.scss';
import headerBg from '../../assests/nelson_painting.jpeg'

export default function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.header__titles}>
        <span className={classes.header__titles__subtitleLg}>devhowey</span>
        <span className={classes.header__titles__subtitleSm}>because no one has ever regretted a tattoo</span>
      </div>
      <img 
        className={classes.header__img} 
        src={headerBg} 
        alt='mountains' 
        />
    </div>
  )
}

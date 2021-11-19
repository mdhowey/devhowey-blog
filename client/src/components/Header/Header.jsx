import classes from './Header.module.scss';
import headerBg from '../../assests/portfolio_backgrounds_3.jpg'

export default function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.header__titles}>
        <span className={classes.header__titles__subtitleLg}>devhowey</span>
        <span className={classes.header__titles__subtitleSm}>now available in both spoken and programming languages</span>
      </div>
      <img 
        className={classes.header__img} 
        src={headerBg} 
        alt='mountains' 
        />
    </div>
  )
}

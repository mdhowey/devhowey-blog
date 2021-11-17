import classes from './Header.module.scss';

export default function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.header__titles}>
        <span className={classes.header__titles__subtitleSm}>devhowey</span>
        <span className={classes.header__titles__subtitleLg}>Blog & Portfolio</span>
      </div>
      <img 
        className={classes.header__img} 
        src='https://geographical.co.uk/media/k2/items/cache/e533c4b8d2d2d3798f3271c35ca6e050_XL.jpg' 
        alt='mountains' 
        />
    </div>
  )
}

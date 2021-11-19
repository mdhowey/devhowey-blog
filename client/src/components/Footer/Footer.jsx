import classes from './Footer.module.scss'
import {BsGithub} from 'react-icons/bs'
import {AiOutlineLinkedin} from 'react-icons/ai'

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__center}>
        <div className={classes.footer__center__links}>
          <p className={classes.footer__center__links__tagline}>you won't know unless you ask</p>
          <BsGithub className={classes.footer__center__links__icon}/>
          <AiOutlineLinkedin className={classes.footer__center__links__icon}/>
        </div>
        <p className={classes.footer__center__howey}>&copy; devhowey 2021</p>
      </div>
    </footer>
  )
}

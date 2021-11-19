import classes from './Footer.module.scss'
import {BsGithub} from 'react-icons/bs'
import {AiOutlineLinkedin} from 'react-icons/ai'

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__random1}>
        <BsGithub className={classes.footer__random1__icon}/>
        <AiOutlineLinkedin className={classes.footer__random1__icon}/>
      </div>
      <div className={classes.footer__random2}>
        <BsGithub className={classes.footer__random2__icon}/>
        <AiOutlineLinkedin className={classes.footer__random2__icon}/>
      </div>
      <div className={classes.footer__random3}>
        <BsGithub className={classes.footer__random3__icon}/>
        <AiOutlineLinkedin className={classes.footer__random3__icon}/>
      </div>
      <div className={classes.footer__random4}>
        <BsGithub className={classes.footer__random4__icon}/>
        <AiOutlineLinkedin className={classes.footer__random4__icon}/>
      </div>
      <div className={classes.footer__random5}>
        <BsGithub className={classes.footer__random5__icon}/>
        <AiOutlineLinkedin className={classes.footer__random5__icon}/>
      </div>
      <div className={classes.footer__random6}>
        <BsGithub className={classes.footer__random6__icon}/>
        <AiOutlineLinkedin className={classes.footer__random6__icon}/>
      </div>
      <div className={classes.footer__center}>
        <div className={classes.footer__center__links}>
          <BsGithub className={classes.footer__center__links__icon}/>
          <AiOutlineLinkedin className={classes.footer__center__links__icon}/>
        </div>
        <p className={classes.footer__center__howey}>&copy; devhowey 2021</p>
      </div>
    </footer>
  )
}

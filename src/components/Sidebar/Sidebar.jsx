import { AiOutlineLinkedin } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import classes from './Sidebar.module.scss';

export default function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebar__items}>
        <span className={classes.sidebar__items__title}>about me</span>
        <img 
          className={classes.sidebar__items__img}
          src='https://s1.significados.com/foto/hipster-358479-1920_sm.jpg' 
          alt='hipster' 
          />
        <p className={classes.sidebar__items__text}>
          I'm baby seitan pickled neutra, banh mi lomo af pug mumblecore man bun quinoa. Etsy taiyaki neutra, raw denim sriracha bicycle rights godard vaporware trust fund occupy blue bottle distillery. Single-origin coffee man bun vexillologist succulents, pug pitchfork la croix whatever tote bag twee raw denim fanny pack kinfolk heirloom. Meggings vice beard banh mi irony locavore hexagon cloud bread tattooed keytar disrupt.
        </p>
      </div>
      <div className={classes.sidebar__items}>
        <span className={classes.sidebar__items__title}>blog categories</span>
        <ul className={classes.sidebar__items__list}>
          <li className={classes.sidebar__items__list__item}>JS</li>
          <li className={classes.sidebar__items__list__item}>CSS</li>
          <li className={classes.sidebar__items__list__item}>React</li>
          <li className={classes.sidebar__items__list__item}>HTML</li>
          <li className={classes.sidebar__items__list__item}>Node.js</li>
          <li className={classes.sidebar__items__list__item}>Express</li>
          <li className={classes.sidebar__items__list__item}>Database</li>
          <li className={classes.sidebar__items__list__item}>New_Dev</li>
        </ul>
      </div>
      <div className={classes.sidebar__items}>
        <span className={classes.sidebar__items__title}>connect</span>
        <div className={classes.sidebar__items__icons}>
          <BsGithub className={classes.sidebar__items__icons__item}/>
          <AiOutlineLinkedin className={classes.sidebar__items__icons__item}/>
        </div>
      </div>
    </div>
  )
}

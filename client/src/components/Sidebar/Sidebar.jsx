import axios from 'axios';
import { useEffect, useState } from 'react';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import classes from './Sidebar.module.scss';

export default function Sidebar() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const getTags = async () => 
    {
      const res = await axios.get('/tags')
      setTags(res.data)
    }
    getTags();
  }, [])
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
        <span className={classes.sidebar__items__title}>projects</span>
        <ul className={classes.sidebar__items__projects}>
          <li className={classes.sidebar__items__projects__item}>
            <BsGithub className={classes.sidebar__items__projects__item__icon}/>
            Gotchi Buddy
          </li>
          <li className={classes.sidebar__items__projects__item}>
            <BsGithub className={classes.sidebar__items__projects__item__icon}/>
            PikChu
          </li>
          <li className={classes.sidebar__items__projects__item}>
            <BsGithub className={classes.sidebar__items__projects__item__icon}/>
            Ramblr
          </li>
          <li className={classes.sidebar__items__projects__item}>
            <BsGithub className={classes.sidebar__items__projects__item__icon}/>
            Surrender
          </li>
          <li className={classes.sidebar__items__projects__item}>
            <BsGithub className={classes.sidebar__items__projects__item__icon}/>
            Fin Cap
          </li>
          <li className={classes.sidebar__items__projects__item}>
            <BsGithub className={classes.sidebar__items__projects__item__icon}/>
            Lyrically
          </li>
          <li className={classes.sidebar__items__projects__item}>
            <BsGithub className={classes.sidebar__items__projects__item__icon}/>
            Counters
          </li>
          <li className={classes.sidebar__items__projects__item}>
            <BsGithub className={classes.sidebar__items__projects__item__icon}/>
            Quadrants
          </li>
          <li className={classes.sidebar__items__projects__item}>
            <BsGithub className={classes.sidebar__items__projects__item__icon}/>
            DragonDex
          </li>
          <li className={classes.sidebar__items__projects__item}>
            <BsGithub className={classes.sidebar__items__projects__item__icon}/>
            TodoList
          </li>
          <li className={classes.sidebar__items__projects__item}>
            <BsGithub className={classes.sidebar__items__projects__item__icon}/>
            Interview Prep
          </li>
          <li className={classes.sidebar__items__projects__item}>
            <BsGithub className={classes.sidebar__items__projects__item__icon}/>
            This Site!
          </li>
        </ul>
      </div>
      <div className={classes.sidebar__items}>
        <span className={classes.sidebar__items__title}>blog categories</span>
        <ul className={classes.sidebar__items__list}>
          {tags.map(t => (
            <Link to={`/?tag=${t.tag}`}>
              <li className={classes.sidebar__items__list__item}>{t.tag}</li>
            </Link>
          ))}
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

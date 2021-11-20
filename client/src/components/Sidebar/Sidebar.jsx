import axios from 'axios';
import { useEffect, useState } from 'react';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import classes from './Sidebar.module.scss';
import goofy_dev from '../../assests/goofy_profile.jpeg'

export default function Sidebar() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const getTags = async () => 
    {
      const res = await axios.get('/tags');
      setTags(res.data);
    }
    getTags();
  }, []);
  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebar__items}>
        <span className={classes.sidebar__items__title}>about me</span>
        <img 
          className={classes.sidebar__items__img}
          src={goofy_dev} 
          alt='hipster' 
          />
        <p className={classes.sidebar__items__text}>
          A Minnesotan in Mexico who enjoys finding patterns in syntax, both in spoken and programming languages. As an English teacher turned software engineer, my perspective allows me to break down challenging concepts for others. 
        </p>
      </div>
      <div className={classes.sidebar__items}>
        <span className={classes.sidebar__items__title}>featured projects</span>
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
          {/* <li className={classes.sidebar__items__projects__item}>
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
          </li> */}
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

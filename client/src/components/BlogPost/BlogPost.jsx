import classes from './BlogPost.module.scss';
import axios from 'axios';
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DefaultImg from '../../assests/portfolio_backgrounds_2.jpg'

export default function BlogPost() {
  const location = useLocation()
  // this is getting the individual blog post id from 
  // location hook --> super cool!
  const path = location.pathname.split('/')[2];
  const [blogPost, setBlogPost] = useState([]);


  useEffect(() => {
    const getBlogPost = async () => {
      const res = await axios.get(`/posts/${path}`)
      setBlogPost(res.data)
    }
    getBlogPost()
  }, [path])
  return (
    <div className={classes.blogpost}>
      <div className={classes.blogpost__wrapper}>
        {blogPost.img ? (

          <img
            className={classes.blogpost__wrapper__img}
            src={blogPost.img}
            alt='new react devtools'
          />

        ) : (

          <img
            className={classes.blogpost__wrapper__img}
            src={DefaultImg}
            alt='new react devtools'
          />

        )}
        <div className={classes.blogpost__wrapper__container}>
          <h1 className={classes.blogpost__wrapper__container__title}>{blogPost.title}</h1>
          <div className={classes.blogpost__wrapper__container__btncontainer}>
            <FiEdit className={classes.blogpost__wrapper__container__btncontainer__edit} />
            <RiDeleteBin5Line className={classes.blogpost__wrapper__container__btncontainer__delete} />
          </div>
        </div>
        <div className={classes.blogpost__wrapper__info}>
          <span className={classes.blogpost__wrapper__info__author}>
            <Link to={`/?user=${blogPost.username}`}>
              {blogPost.username}
            </Link>
          </span>
          <span className={classes.blogpost__wrapper__info__date}>{new Date(blogPost.createdAt).toLocaleDateString()}</span>
        </div>
        <p className={classes.blogpost__wrapper__text}>{blogPost.body}</p>
      </div>
    </div>
  )
}

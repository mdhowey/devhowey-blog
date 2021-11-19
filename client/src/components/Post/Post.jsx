import { Link } from 'react-router-dom'
import classes from './Post.module.scss'

export default function Post({post}) {
  return (
    <div className={classes.post}>
      {post.photo &&(
      <img
        className={classes.post__img}
        src={post.photo} 
        alt='new react devtools' 
        />
      )}
        <div className={classes.post__info}>
          <div className={classes.post__info__cats}>
            {post.tags.map((t) => (
              <span className={classes.post__info__cats__cat}>{t}</span>
            ))}
            <span className={classes.post__info__cats__cat}>Express</span>
          </div>
          <span>
            <Link className={classes.post__info__title} to={`/post/${post._id}`}>{post.title}</Link>
          </span>
          <hr/>
          <span className={classes.post__info__date}>{new Date(post.createdAt).toDateString()}</span>
          <p className={classes.post__info__description}>{post.description}</p>
        </div>
    </div>
  )
}

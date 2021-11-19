import Post from '../Post/Post'
import classes from './Posts.module.scss'

export default function Posts({posts}) {
  return (
    <div className={classes.posts}>
      {posts.map(p => (
        <Post post={p} />
      ))}
    </div>
  )
}

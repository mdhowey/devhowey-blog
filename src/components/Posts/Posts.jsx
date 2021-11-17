import Post from '../Post/Post'
import classes from './Posts.module.scss'

export default function Posts() {
  return (
    <div className={classes.posts}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

import classes from './ShowPost.module.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import BlogPost from '../../components/BlogPost/BlogPost'

export default function ShowPost() {
  return (
    <div className={classes.showpost}>
      <BlogPost />
      <Sidebar />
    </div>
  )
}

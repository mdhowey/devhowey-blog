import Header from '../../components/Header'
import Posts from '../../components/Posts'
import Sidebar from '../../components/Sidebar'
import classes from './Home.module.scss'

export default function Home() {
  return (
    <>
      <Header />
      <div className={classes.home}>
        <Posts />
        <Sidebar />
      </div>
    </>
  )
}

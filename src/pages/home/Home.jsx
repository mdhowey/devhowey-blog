import Header from '../../components/Header/Header'
import Posts from '../../components/Posts/Posts'
import Sidebar from '../../components/Sidebar/Sidebar'
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

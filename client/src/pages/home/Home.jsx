import { useEffect, useState } from 'react'
import axios from 'axios';
import Header from '../../components/Header/Header'
import Posts from '../../components/Posts/Posts'
import Sidebar from '../../components/Sidebar/Sidebar'
import classes from './Home.module.scss'
import { useLocation } from 'react-router';
import Footer from '../../components/Footer/Footer';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation()

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`/posts${search}`)
        setPosts(res.data)
      } catch (err) {
        console.log(err);
      }
    }
    fetchPosts();
  }, [search])

  return (
    <>
      <Header />
      <div className={classes.home}>
        <Posts posts={posts} />
        <Sidebar />
      </div>
      <Footer />
    </>
  )
}

import classes from './ShowPost.module.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import BlogPost from '../../components/BlogPost/BlogPost';
import FooterSm from '../../components/SmallFooter/FooterSm';
import HeaderSm from '../../components/SmallHeader/HeaderSm';

export default function ShowPost() {
  return (
    <>
      <HeaderSm />
      <div className={classes.showpost}>
        <BlogPost />
        <Sidebar />
      </div>
      <FooterSm />
    </>
  )
}

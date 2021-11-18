import classes from './Post.module.scss'

export default function Post() {
  return (
    <div className={classes.post}>
      <img
        className={classes.post__img}
        src='https://www.hiddenbrains.com/blog/wp-content/uploads/2019/09/New-React-Developer-Tools.jpg' 
        alt='new react devtools' 
        />
        <div className={classes.post__info}>
          <div className={classes.post__info__cats}>
            <span className={classes.post__info__cats__cat}>React</span>
            <span className={classes.post__info__cats__cat}>Express</span>
          </div>
          <span className={classes.post__info__title}>
            Etsy taiyaki neutra, raw denim sriracha
          </span>
          <hr/>
          <span className={classes.post__info__date}>
            1 hour ago
          </span>
          <p className={classes.post__info__description}>
            Single-origin coffee man bun vexillologist succulents, pug pitchfork la croix whatever tote bag twee raw denim fanny pack kinfolk heirloom. Meggings vice beard banh mi irony locavore hexagon cloud bread tattooed keytar disrupt.
          </p>
        </div>
    </div>
  )
}

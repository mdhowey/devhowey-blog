import classes from './BlogPost.module.scss'
import {FiEdit} from 'react-icons/fi'
import {RiDeleteBin5Line} from 'react-icons/ri'

export default function BlogPost() {
  return (
    <div className={classes.blogpost}>
      <div className={classes.blogpost__wrapper}>
        <img 
          className={classes.blogpost__wrapper__img} 
          src='https://livecodestream.dev/post/top-productivity-tools-for-react-developers/featured.jpg' 
          alt='react code in screen'
          />
        <div className={classes.blogpost__wrapper__container}>
          <h1 className={classes.blogpost__wrapper__container__title}>Hashtag salvia man bun</h1>
          <div className={classes.blogpost__wrapper__container__btncontainer}>
            <FiEdit className={classes.blogpost__wrapper__container__btncontainer__edit}/>
            <RiDeleteBin5Line className={classes.blogpost__wrapper__container__btncontainer__delete}/>
          </div>
        </div>
        <div className={classes.blogpost__wrapper__info}>
          <span className={classes.blogpost__wrapper__info__author}>devhowey</span>
          <span className={classes.blogpost__wrapper__info__date}>1 hour ago</span>
        </div>
        <p className={classes.blogpost__wrapper__text}>
          I'm baby coloring book lumbersexual food truck prism. Kickstarter chia slow-carb, quinoa aesthetic actually kogi drinking vinegar freegan locavore godard. Hella street art wolf scenester swag, food truck health goth. Prism snackwave raclette cray disrupt flexitarian pork belly fashion axe austin cloud bread. Lyft listicle blue bottle bitters, ugh portland XOXO cred. Mumblecore wayfarers vexillologist vape biodiesel marfa vegan occupy migas. Intelligentsia flannel ennui edison bulb messenger bag.

          Direct trade bicycle rights poutine asymmetrical bespoke, cornhole echo park vexillologist beard letterpress tumeric vegan hammock trust fund. Four dollar toast microdosing truffaut vice, wayfarers blog neutra stumptown woke crucifix. Succulents selfies artisan fam offal trust fund crucifix fixie knausgaard vape subway tile locavore quinoa chillwave. Af man braid biodiesel YOLO freegan ramps craft beer art party gluten-free taiyaki cray humblebrag.

          Normcore bitters chartreuse fashion axe messenger bag, godard cornhole leggings organic. Tumblr bitters everyday carry bicycle rights mustache. IPhone green juice polaroid activated charcoal gluten-free meggings locavore roof party etsy vegan gentrify. Ugh bespoke viral austin photo booth jianbing cronut four loko. Crucifix freegan coloring book tilde mustache intelligentsia hell of lomo +1 cred la croix tacos roof party tbh tousled. Brooklyn cloud bread biodiesel, twee pickled vice vinyl portland slow-carb VHS small batch glossier adaptogen tattooed tousled.

          Wolf wayfarers hot chicken readymade whatever cray. Typewriter retro pinterest tbh. Mlkshk selvage beard, green juice hot chicken iceland PBR&B enamel pin venmo skateboard fashion axe tbh heirloom. Mumblecore activated charcoal master cleanse bicycle rights, gluten-free +1 wayfarers fashion axe ramps truffaut. Schlitz selfies trust fund, scenester tousled woke pork belly hot chicken intelligentsia ethical venmo. Mumblecore cred enamel pin, small batch meh flexitarian paleo disrupt irony actually microdosing.

          Ugh chartreuse truffaut, pitchfork selfies blog keytar hammock. Narwhal master cleanse meh cred next level. Next level copper mug mumblecore hashtag four loko. Jean shorts godard tousled street art trust fund pitchfork typewriter taxidermy gentrify beard keytar prism. Blue bottle forage pitchfork trust fund ethical. Heirloom XOXO ennui intelligentsia sustainable chartreuse live-edge etsy man bun selfies. Deep v pinterest schlitz unicorn stumptown literally humblebrag YOLO ennui vinyl messenger bag crucifix.

          Disrupt pour-over salvia art party vice hella heirloom deep v church-key taxidermy direct trade keytar kickstarter palo santo. Farm-to-table plaid kickstarter, quinoa austin meh sriracha lumbersexual shoreditch. Jean shorts fingerstache food truck man braid poke. Photo booth yr food truck hammock letterpress asymmetrical iPhone. +1 palo santo four loko celiac dreamcatcher, kombucha quinoa bitters marfa listicle kale chips DIY. Chartreuse before they sold out irony 3 wolf moon, prism adaptogen tofu. Tacos hella occupy, listicle retro farm-to-table cray banh mi cardigan.

          Kickstarter chia vaporware mumblecore air plant, unicorn bushwick tacos poutine seitan polaroid pitchfork shaman roof party chillwave. Brunch tbh meggings schlitz YOLO selfies shaman etsy microdosing. Post-ironic sriracha celiac meh trust fund blue bottle. Raw denim gochujang williamsburg neutra, post-ironic jean shorts cold-pressed skateboard celiac actually. Pork belly raclette small batch humblebrag hammock XOXO banh mi. Tumeric literally four loko, DIY cliche lo-fi edison bulb direct trade roof party irony cronut biodiesel lomo YOLO microdosing.

          Mumblecore iceland bitters shoreditch literally blue bottle letterpress tbh truffaut blog ugh. Viral kitsch you probably haven't heard of them, ethical seitan narwhal direct trade tbh truffaut +1 heirloom tofu occupy artisan. Brunch schlitz chicharrones echo park stumptown swag, sustainable hell of asymmetrical copper mug marfa. Poutine intelligentsia truffaut tacos beard williamsburg. Trust fund locavore 3 wolf moon polaroid wolf green juice banjo celiac.
        </p>
      </div>
    </div>
  )
}

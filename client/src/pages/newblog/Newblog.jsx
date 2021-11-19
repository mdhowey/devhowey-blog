import { useContext, useState } from 'react';
import { AiOutlineVideoCameraAdd } from 'react-icons/ai';
import classes from './Newblog.module.scss';
import axios from 'axios';
import { Context } from '../../context/Context';
import FooterSm from '../../components/SmallFooter/FooterSm';
import HeaderSm from '../../components/SmallHeader/HeaderSm';

export default function Newblog() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [body, setBody] = useState('');
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      description,
      body
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append('name', filename);
      data.append('file', file);
      newPost.img = filename;
      try {
        await axios.post('/upload', data);
      } catch (err) {

      }
    } 
    try {
      const res = await axios.post('/posts', newPost);
      window.location.replace(`/post/${res.data._id}`)
    } catch (err) {

    }
  };

  return (
    <div className={classes.newblog}>
      <HeaderSm />
      {file && (
        <img
          className={classes.newblog__img} 
          // creates url for file to be visible in new blog form 
          src={URL.createObjectURL(file)}
          alt='express node' 
        />
      )}
      <form 
        className={classes.newblog__form}
        onSubmit={handleSubmit}>
        <label htmlFor='blogImg'>
          <AiOutlineVideoCameraAdd className={classes.newblog__form__icon}/>
        </label>
        <input 
          type='file' 
          id='blogImg' 
          style={{display:'none'}}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <input 
          type='text' 
          placeholder='Blog title' 
          className={classes.newblog__form__input}
          autoFocus={true}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input 
          type='text' 
          placeholder='Teaser' 
          className={classes.newblog__form__input}
          onChange={(e) => setDescription(e.target.value)}
        />
        <textarea 
          placeholder='Blog goes here' 
          type="text" 
          rows="10" 
          cols="50" 
          className={classes.newblog__form__text}
          onChange={(e) => setBody(e.target.value)}>
        </textarea>
        <button 
          className={classes.newblog__form__submit}
          type='submit'>Publish</button>
      </form>
      <FooterSm />
    </div>
  )
}

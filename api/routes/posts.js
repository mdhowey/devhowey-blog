const router = require('express').Router();
const User = require('../models/User');
const Blog = require('../models/Blog');

/* ==== Routes ==== */

/* Create */
router.post('/', async (req, res) => {
  const newPost = new Blog(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);

  } catch (err) {
    res.status(500).json(err);
  }
})

/* Read One */
router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    
    res.status(200).json(blog);

  } catch (err) {
    res.status(500).json(err)
  }
})

/* Read All */
router.get('/', async (req, res) => {
  const username = req.query.user;
  const tags = req.query.tag;
  try {
    let posts;
    if (username) {
      posts = await Blog.Find({username})
    } else if (tags) {
      posts = await Blog.find(
        {
          tags: {
            $in: [tags]
          },  
        }
      );
    } else {
      posts = await Blog.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err)
  }
})

/* Update */
router.put('/:id', async(req, res) => {
  try {
    const blog = await Post.findById(req.params.id);
    if(blog.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true },
        )
        res.status(200).json(updatedPost)
      } catch (err) {
        res.status(500).json(err)
      }
    } else {
      res.statusMessage(401).json('Must be current user blog post');
    }
  } catch (err) {
    res.status(500).json(err);
  }   
});

/* Delete */
router.delete('/:id', async(req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if(blog.username === req.body.username) {
      try {
        await blog.delete();
        res.status(200).json('Blog was successfully deleted')
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.statusMessage(401).json('Must be current user blog post');
    }
  } catch (err) {
    res.status(500).json(err);
  }   
});

module.exports = router;
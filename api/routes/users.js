const router = require('express').Router();
const User = require('../models/User');
const Blog = require('../models/Blog');
const bcrypt = require('bcrypt');

/* ==== Routes ==== */

/* Read */
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...otherUserData} = user._doc;
    
    res.status(200).json(otherUserData);

  } catch (err) {
    res.status(500).json(err)
  }
})

/* Update */
router.put('/:id', async(req, res) => {
  if(req.body.userId === req.params.id){
    if(req.body.password) {
      const salt = await bcrypt.genSalt(12);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try{
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id, 
        {
          $set: req.body,
        },
        { new: true },
      );
      res.status(200).json(updatedUser)
    } catch(err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json('Not current user account');
  }
});

/* Delete */
router.delete('/:id', async(req, res) => {
  if(req.body.userId === req.params.id){
    try {
      const user = await User.findById(req.params.id);
      try{
        await Blog.deleteMany({ username: user.username });
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json('User successfully deleted')
      } catch(err) {
        res.status(500).json(err);
      }
    } catch(err) {
      res.status(404).json('User not found')
    }
  } else {
    res.status(401).json('Not current user account');
  }
});

module.exports = router;
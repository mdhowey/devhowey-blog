const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

const errorMessage = 'Password [and|or] Username [are|is] incorrect';

/* ==== Routes ==== */

/* Register */
router.post('/register', async(req, res) => {
  try{

    const salt = await bcrypt.genSalt(12);
    const hashed = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashed,
    });
    
    const user = await newUser.save();

    const {password, ...otherUserData} = user._doc;
    res.status(200).json(otherUserData);
    
  } catch(err) {
    res.status(500).json(err);
  }
});

/* Login */
router.post('/login', async(req, res) => {
  try{
    const user = await User.findOne({username: req.body.username})
    !user && res.status(400).json(errorMessage)

    const passwordCheck = await bcrypt.compare(req.body.password, user.password)
    !passwordCheck && res.status(400).json(errorMessage)

    const {password, ...otherUserData} = user._doc;
    res.status(200).json(otherUserData);
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router;
const express = require('express');
const app = express();
const PORT = 3000;
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const usersRoute = require('./routes/users');
const postsRoute = require('./routes/posts');

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(console.log('Connected to MONGODB!!!'))
  .catch(err=> console.log(err));

  app.use('/api/auth', authRoute);
  app.use('/api/users', usersRoute);
  app.use('/api/posts', postsRoute);

app.listen(PORT, () => {
  console.log(`API is running on port ${PORT}`)
});
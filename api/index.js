const express = require('express');
const app = express();
const PORT = 5000;
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const usersRoute = require('./routes/users');
const postsRoute = require('./routes/posts');
const tagsRoute = require('./routes/tags');
const multer = require('multer');
const path = require('path');

dotenv.config();
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, '/images')));

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(console.log('Connected to MONGODB!!!'))
  .catch(err=> console.log(err));

const store = multer.diskStorage({
  destination:(req, file, callback) => {
    callback(null, 'images')
  }, 
  filename: (req, file, callback) => {
    callback(null, req.body.name);
  },
});

const upload = multer({ store: store });

app.post('/api/upload', upload.single('file'), (req, res) => {
  res.status(200).json('File uploaded successfully')
});

app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/posts', postsRoute);
app.use('/api/tags', tagsRoute);

app.listen(PORT, () => {
  console.log(`API is running on port ${PORT}`)
});
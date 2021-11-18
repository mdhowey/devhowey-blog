const express = require('express');
const app = express();
const PORT = 3000;
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(console.log('Connected to MONGODB!!!'))
  .catch(err=> console.log(err));

app.listen(PORT, () => {
  console.log('API up and running')
});
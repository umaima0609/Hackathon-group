const mongoose = require('mongoose');
const express = require('express');
const app = express();

// Correct MongoDB connection URL
const URL = 'mongodb+srv://iqragituhb:<iqragituhb>@cluster0.29zot.mongodb.net/iqradatabase?retryWrites=true&w=majority';

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB Atlas', err);
  });

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

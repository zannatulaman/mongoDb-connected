const mongoose = require('mongoose');

require('dotenv').config()


MONGO_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.txnf3sg.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`

// mongoose.connect(MONGO_URI, {})

// mongoose.connection.on('connected', () => {
//     console.log('Db is connected');
// })

// getting-started.js


async function dbConnect() {
  await mongoose.connect(MONGO_URI);

  console.log('DB is connected');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports = dbConnect;

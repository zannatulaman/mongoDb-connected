const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const dbConnect = require('./db/dbConnect');
const orderRoutes = require('./routes/order')

const PORT = 5000

app.use(bodyParser.json());

dbConnect().catch(err => console.log(err));


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.use('/order', orderRoutes);


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost ${PORT}`)
})
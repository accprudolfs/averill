const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const app = require('../index')

dotenv.config();
const { PORT = 8080 } = process.env;

mongoose.connect(process.env.DB_HOST, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => { app.listen(PORT) })
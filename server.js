const express = require ('express');
const mongoose = require('mongoose');
const user = require('./routes/api/user');
const account = require('./routes/api/account');

const app = express();

//DB CONFIG
const db = require('./config/keys').mongoURI;
//CONNECT TO MONGODB
mongoose.connect(db)
.then(() => console.log('MondogDB connected'))
.catch(err => console.log(err));
app.get('/', (req, res) => res.send("this is a test"));

app.use('./api/user', user);
app.use('./api/account', account);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server runnit on port ${port}`))

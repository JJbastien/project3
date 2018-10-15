const express = require ('express');
const mongoose = require('mongoose');
const user = require('./routes/api/user');
const student = require('./routes/api/student');
const bodyParser = require('body-parser');
const passport = require('passport');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//DB CONFIG
const db = require('./config/keys').mongoURI;
//CONNECT TO MONGODB
mongoose.connect(db)
.then(() => console.log('MondogDB connected'))
.catch(err => console.log(err));

app.use(passport.initialize())
require('./config/strategy')(passport)


app.use('/api/user', user);
app.use('/api/student', student);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server running on port ${port}`))

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

// const authRouter = require('./routes/auth')
// const adminRouter = require('./routes/admin')
const indexRouter = require('./routes/index')
// const userRouter = require('./routes/user')

const app = express();

// for parsing application/json
app.use(cors())
// for parsing application/xwww-
app.use(express.urlencoded({ extended: false }));

// Get the Javascript in the browser
// app.use("/javascripts", express.static("./views/outJavascripts"));
app.use("/images", express.static("./utils/images"));
app.use("/styles", express.static("./utils/css"));

// app.use("/styles", express.static("./public/styles"));
app.set('view engine', 'jade');

// setting multiple view folders
// app.set('views', [__dirname + '/views/admin',__dirname + '/views/user', __dirname + '/views'])

// routes
app.use('/', indexRouter)
// app.use('/auth', authRouter)
// app.use('/admin', adminRouter)
// app.use('/user', userRouter)
// require('./routes')(app)
mongoose.connect(`mongodb://localhost:27017/citrine`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
 },
 function (err, res) {
  if (err) {
   console.log ('ERROR connecting to MongoDB : ' + err);
  }
  else {
  console.log ('Connected to: MongoDB');
  }
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', async function() {
  // we're connected!
  app.listen(8080)
  console.log('app started at port 8080');
});

// var newDate = new Date();
// console.log(newDate)
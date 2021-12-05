// import all modules and npm packages need for the server file
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const exphbs = require('express-handlebars')
const hbs = exphbs.create({})
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store)

// create session to be used
const sess = {
    secret: 'Super secret secret',
    cookie: { expires: new Date(Date.now() + 36000000)},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  }

// start express server
const app = express();
// user port given or use port that other servers are using
const PORT = process.env.PORT || 3001;
// set up express stuff
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('images'));

// set up handle bars as our template engine
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

// user the sessiong created above
app.use(session(sess))

//use routes
app.use(routes);

// start server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`App listening on port http://localhost:${PORT}`));
})
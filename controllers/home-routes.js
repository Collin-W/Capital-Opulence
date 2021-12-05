const router = require('express').Router()

// default route from home page
router.get('/', (req, res) => {
  // render homepage page
 res.render('homepage', {loggedIn: req.session.loggedIn})
})

// route for logging in
router.get('/login', (req,res) => {
  //if logged in return to home page
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  // render login page
  res.render('login')
})

// route for expense tracker page
router.get('/tracker', (req, res) => {
  //render expense tracker page
  res.render('expense-tracker', {loggedIn: req.session.loggedIn})
})

//route for calculator page
router.get('/calc', (req, res) => {
  //render calculator page
  res.render('calculator', {loggedIn: req.session.loggedIn})
})

// route for about page
router.get('/about', (req, res) => {
  //create each card for people who have worked on the web application
  cardList = [];
  cardList.push({ imgsrc: "images/mark.jpg", contributor: "Mark Carriveau", title: "Future Jr. Developer", abouttext: "Currently a machinist with a love for coding", github: "https://github.com/mjbc53", email: "mjbc53@gmail.com"});
  cardList.push({ imgsrc: "images/blank.jpg", contributor: "Tom Cole", title: "Project Manager & Developer", abouttext: "about tom", github: "https://github.com/caeldeth", email: "thomas.cole@eris.co" });
  cardList.push({ imgsrc: "images/blank.jpg", contributor: "Inmar Luna", title: "Full Stack Student", abouttext: "IT Specialist wanting to be a back-end developer.", github: "https://github.com/LunaZ13", email: "inmar@inmar.inmar" });
  cardList.push({ imgsrc: "images/ben.jpg", contributor: "Ben Vue", title: "Full Stack Student", abouttext: "Ben is Ben", github: "https://github.com/benyvue", email: "bvue012@gmail.com" });
  cardList.push({ imgsrc: "images/collin.jpg", contributor: "Collin Whalen", title: "Front-end Development Enthusiast", abouttext: "I have a passion to create applications that help others!", github: "https://github.com/Collin-W", email: "whalencollin@gmail.com" });
  //render about page
  res.render('about', {cardList: cardList, loggedIn: req.session.loggedIn});
})



module.exports = router

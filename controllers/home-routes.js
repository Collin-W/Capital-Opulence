const router = require('express').Router()
const sequelize = require('../config/connection')


router.get('/', (req, res) => {
 res.render('homepage')
})

router.get('/login', (req,res) => {
  res.render('login')
})

router.get('/tracker', (req, res) => {
  res.render('expense-tracker')
})

router.get('/calc', (req, res) => {
  res.render('calculator')
})

router.get('/about', (req, res) => {
  cardList = [];
  cardList.push({ imgsrc: "images/blank.jpg", contributor: "Mark Carriveau", title: "Some Title", abouttext: "about mark", email: "mark@mark.mark" });
  cardList.push({ imgsrc: "images/blank.jpg", contributor: "Tom Cole", title: "Some Title", abouttext: "about tom", email: "tom@tom.tom" });
  cardList.push({ imgsrc: "images/blank.jpg", contributor: "Inmar Luna", title: "Some Title", abouttext: "about inmar", email: "inmar@inmar.inmar" });
  cardList.push({ imgsrc: "images/blank.jpg", contributor: "Ben Vue", title: "Some Title", abouttext: "about ben", email: "ben@ben.ben" });
  cardList.push({ imgsrc: "images/blank.jpg", contributor: "Collin Whalen", title: "Some Title", abouttext: "about collin", email: "collin@collin.collin" });
  res.render('about', {cardList: cardList });
})


module.exports = router
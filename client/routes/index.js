const express = require('express');
const router = express.Router();
//const User = require('../models/user');

router.get('/', (req, res, next) => {
	console.log("/...")
	return res.render('login.ejs');
});
 
router.get('/login', (req, res, next) => {
	console.log("login...")
	return res.render('login.ejs');
});

router.post('/login', (req, res, next) => {
	console.log(req)
	console.log(res)
	console.log("login post..")
});

router.get('/dashboard', (req, res, next) => {
	 
});
 
module.exports = router;
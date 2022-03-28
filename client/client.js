const express = require('express');   
//const bodyParser = require('body-parser');   
const ejs = require('ejs'); 
const path = require('path'); 
const app = express();
session = require('express-session'); 
const { createProxyMiddleware } = require('http-proxy-middleware');

const port = process.env.port || 3001;  

app.use('/api', createProxyMiddleware({ target: 'http://localhost:5000', changeOrigin: true, secure: false }));
  
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/views'));

const index = require('./routes/index');
app.use('/login', index);

app.use((req, res, next) => {
    const err = new Error('File Not Found');
    err.status = 404;
    next(err);
  });

app.use(session({
    secret: 'ameriSave2022',
    resave: true,
    saveUninitialized: false
  }));


 
   
app.listen(port, () => console.log(`Listening on port ${port}`)); 

const express = require('express');   
const bodyParser = require('body-parser');    
const app = express();
const port = process.env.port || 5000;    

//import { messages } from './data/messages.json'
const messages = require('./data/messages.json')
const monthlySalesData = require('./data/monthly-sales-data.json')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
 
app.get('/api/login', (req, res) => {
    res.send({message: 'Hello Express!'});
});

app.get('/api/monthly-sales-data', (req, res) => {
    res.send(monthlySalesData);
});

app.get('/api/messages', (req, res) => {
    res.send(messages);
});

app.listen(port, () => console.log(`Listening on port ${port}`)); 
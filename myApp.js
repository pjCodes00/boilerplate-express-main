let express = require('express');
let app = express();
require('dotenv').config()

console.log('Hello World')

/*app.get('/', (req, res) => {
  res.send('Hello Express')
})*/

app.use('/public', express.static(__dirname + '/public'))

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`)
  next()
})
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

app.get('/json', (req, res) => {
  const msgStyle= process.env.MESSAGE_STYLE

  if(msgStyle === 'uppercase') {
    res.json({"message": "HELLO JSON"})
  } else{
    res.json({"message": "Hello json"})
  }
  
})

app.get('/now', (req, res, next) => {
 req.time= new Date().toString()
 next()
}, (req, res) => {
  res.json({time: req.time})
})

app.get('/:word/echo', (req, res) => {
 const {word}= req.params
 
 res.json({echo: word})
})

































 module.exports = app;

let express = require('express');
let app = express();
require('dotenv').config()

console.log('Hello World')

/*app.get('/', (req, res) => {
  res.send('Hello Express')
})*/

app.use('/public', express.static(__dirname + '/public'))

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


































 module.exports = app;

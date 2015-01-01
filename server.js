var express = require('express'),
    fs = require('fs'),
    path = require('path');

var app = module.exports = express()

app.set('port', process.env.PORT || 3000)

// serve static files
app.use(express.static(__dirname + '/'))

// serve same html for all other routes
app.get('*', function(req, res, next){
  res.sendFile(__dirname + '/index.html')
})

app.listen(app.get('port'), function(){
  console.log('server listening at %s', app.get('port'))
})

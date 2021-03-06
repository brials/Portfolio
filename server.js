'use strict';


const express = require('express');

const app = express();
const PORT = process.env.PORT || 7000;


app.use(express.static('./public'));

app.get('*', function(request, response) {

  response.sendFile('index.html', {root: './public'});
});

app.listen(PORT, function() {
  console.log('server is up and running on port 7000 and can be accessed at localhost:7000 in your browser.')
});

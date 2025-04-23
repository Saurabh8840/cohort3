const request = require('supertest');
const assert = require('assert');
const express = require('express');

const app = express();
let requestcount = 0;

// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable
//
//code is writtenhere
// app.use(function(req,re,next){
//   requestcount=requestcount+1;
//   next();
// })

app.use(function(req,res,next){
  requestcount=requestcount+1;
  next();
})

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/users', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/requestCount', function(req, res) {
  res.status(200).json({ requestcount });
});

app.listen(3000)

module.exports = app;
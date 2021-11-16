// import express from 'express';
// import next from 'next';
// import helmet from 'helmet';
// import bodyParser from 'bodyParser';
// import cors from 'cors';

// import routes from '../routes';
const next = require('next');
const path = require('path');
const helmet = require('helmet');
const api = require('../src/services/api');
const express = require('express');
// const routes = require('../routes');

const app = next({
  dev: process.env.NODE_ENV !== 'production',
  dir: path.join(__dirname, '../'),
});

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Set header to help you mitigate clickjacking attacks
  server.use(
    helmet.frameguard({
      action: 'sameorigin'
    })
  );

  server.get('/health', (req, res) => {
    res.send('Server is running');
  });

  // Handle API requetst
  
  server.use('/api', api);

  server.get('*', handle);

  server.listen(3030, (err) => {
    if (err) throw err;
    console.log('Start Jamendo React Next Server v0.0.1');
    console.log(`Ready on http://localhost:3030`);
  })
})
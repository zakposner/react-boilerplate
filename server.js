const express = require('express');
const moment = require('moment');
const colors = require('colors')
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

// log requests to console
app.use((req, res, next) => {

  let now = moment().format('MMM Do YYYY, h:mm:ss a');
  let status = res.statusCode === 200 // format status code color by response
    ? colors.green(res.statusCode)
    : colors.red(res.statusCode);

  console.log(`${now} : ${req.method} ${colors.yellow(req.path)} ~ ${status}`);
  next();

});

// load static files from dist folder
app.use(express.static('dist'));

app.get('*', (req, res) => { // make sure user always gets index.html
  res.sendFile(path.join(__dirname, 'dist/index.html'));
})

app.listen(PORT, () => {

  let now = moment().format('MMM Do YYYY, h:mm:ss a');
  console.log(colors.bgBlue(`server running on port ${PORT} at ${now}`));

});

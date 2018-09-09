const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const db             = require('./config/db');
const app            = express();


const port = 8888;
require('./app/routes')(app, {});

MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err)
                      
  // Make sure you add the database name and not the collection name
  db = database.db("storedb")
  require('./app/routes')(app, db);


app.listen(port, () => {
  console.log('We are live on ' + port);
   })
});
const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const db             = require('./config/db');
const app            = express();


const port = 8888;
app.use(bodyParser.urlencoded({extended:true}));
MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err)
                      
  // Make sure you add the database name and not the collection name

  const collection=app.post('/notes', (req, res) => {
    // You'll create your note here.
    const note={title:req.body.title};
    var dbo = database.db("storedb");
    dbo.collection('storerecord').insert(note,(err,result)=>{
    if(err)
    {
        res.send({'error':'An error has occured'});
    }
    else
    {
        res.send(result.ops[0]);
    }

    });
    console.log(req.body)
  
  });


app.listen(port, () => {
  console.log('We are live on ' + port);
   })
});
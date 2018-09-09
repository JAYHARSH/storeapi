
var ObjectID = require('mongodb').ObjectID;
module.exports = function(app, database) {

// put service

app.put('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    const note = {  title: req.body.title };
    database.collection('storerecord').update(details, note, (err, result) => {
      if (err) {
          res.send({'error':'An error has occurred'});
      } else {
          res.send(note);
      } 
    });
  });

// delete service

app.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    database.collection('storerecord').remove(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send('Note ' + id + ' deleted!');
      } 
    });
  });


// get service

    app.get('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        database.collection('storerecord').findOne(details, (err, item) => {
          if (err) {
            res.send({'error':'An error has occurred'});
          } else {
            res.send(item);
          }
        });
    });


 //post service

 
    app.post('/notes', (req, res) => {
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
  };
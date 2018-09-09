
module.exports = function(app, db) {
    const collection=app.post('/notes', (req, res) => {
        // You'll create your note here.
        const note={text:req.body.body,title:req.body.title};
        db.collection('storerecord').insert(note,(err,result)=>{
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
        res.send('Hello')
      });
};
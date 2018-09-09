const noteRoutes = require('./note_routes');
module.exports = function(app, db) {
  noteRoutes(app, db);
  // Other route groups could go here, in the future

  app.post('/notes', (req, res) => {
    // You'll create your note here.
    res.send('Hello')
  });
};
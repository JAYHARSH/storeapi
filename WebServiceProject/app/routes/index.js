// routes/index.js
const noteRoutes = require('./note_route');

module.exports = function(app, database) {
  noteRoutes(app, database);
};
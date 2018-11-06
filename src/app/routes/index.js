const noteRoutes = require('./web3_routes');
module.exports = function(app, db) {
  noteRoutes(app, db);  
};
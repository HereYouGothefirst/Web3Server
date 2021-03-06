const express        = require('express');
const bodyParser     = require('body-parser');
const app            = express();
const port = 9000;


app.use(bodyParser.urlencoded({ extended: true }));

require('./app/routes')(app, db);
app.listen(port, () => {      
    console.log('Listening on port:' + port);
}); 




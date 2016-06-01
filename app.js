var express = require('express'), 
    app = express(),
    router = express.Router()

app.use(router)
app.use('/public', express.static('public'));

router.all('/', function (req, res, next) {  
  
  res.send('<!DOCTYPE html>' +
            '<html>' +
            '<head>' +
                '<title>Whyd Store</title>' +
                '<link rel="stylesheet" type="text/css" href="public/style.css">' +
            '</head>' +
            '<body>' +
            '<p>Hello World</p>' +
            '</body>' +
            '</html>')
});

app.listen(9000);  
module.exports = app; 

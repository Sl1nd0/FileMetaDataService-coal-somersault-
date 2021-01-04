'use strict';

var express = require('express');
var cors = require('cors');

var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });


app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  const file = req.file;
  
  let data = {
    name: file.originalname,
    type: file.mimetype,
    size: file.size
  };
  res.send(data);

});


app.listen(process.env.PORT || 4000, function () {
  console.log('Node.js listening ...');
});

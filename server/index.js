const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 1337;
const cassandra = require('../db/cassandra')

app.use('/rooms/:id', express.static('./client/dist'));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get('/rooms/:id/photos', (req, res) => {
  cassandra.getPhotos(req.params.id, (err, response) => {
    if (err) {
      res.status(501).send();
    } else {
      res.end(JSON.stringify(response));
    }
  });
});

app.post('/rooms/:id/photos', (req, res) => {
  cassandra.insertPhotos(req.params.id, req.query.photo_id, req.query.url, req.query.caption, (err, response) => {
    if (err) {
      res.status(501).send();
    } else {
      res.end(JSON.stringify(response));
    }
  });
});

app.put('/rooms/:id/photos', (req, res) => {

  cassandra.updatePhotos(req.params.id, req.query.photo_id, req.query.url, req.query.caption, (err, response) => {
    if (err) {
      res.status(501).send();
    } else {
      res.end(JSON.stringify(response));
    }
  });
});

app.delete('/rooms/:id/photos', (req, res) => {
  cassandra.deletePhotos(req.params.id, req.params.photo_id, (err, response) => {
    if (err) {
      res.status(501).send();
    } else {
      res.end(JSON.stringify(response));
    }
  });
});

app.listen(PORT, () => {
  console.log(`server listening on port, ${PORT}`);
});
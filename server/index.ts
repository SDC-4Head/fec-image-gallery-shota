require("newrelic");
import { Express, Request, Response, NextFunction } from "express";
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = 1337;
import * as postgresql from "../db/postgresql";

const app: Express = express();

app.use("/rooms/:id", express.static("./client/dist"));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get("/rooms/:id/photos", (req: Request, res: Response) => {
  postgresql.getPhotos(req.params.id, (err: Error, response: Response) => {
    if (err) {
      console.log("err");
      res.status(501).send();
    } else {
      res.end(JSON.stringify(response));
    }
  });
});

app.post("/rooms/:id/photos", (req: Request, res: Response) => {
  postgresql.insertPhotos(
    req.params.id,
    req.body.photo_id,
    req.body.url,
    req.body.caption,
    (err: Error, response: Response) => {
      if (err) {
        res.status(501).send();
      } else {
        res.send("POST request to the homepage");
      }
    }
  );
});

app.put("/rooms/:id/photos", (req, res) => {
  postgresql.updatePhotos(
    req.params.id,
    req.body.photo_id,
    req.body.url,
    req.body.caption,
    (err, response) => {
      if (err) {
        res.status(501).send();
      } else {
        res.end(JSON.stringify(response));
      }
    }
  );
});

app.delete("/rooms/:id/photos", (req, res) => {
  postgresql.deletePhotos(
    req.params.id,
    req.params.photo_id,
    (err, response) => {
      if (err) {
        res.status(501).send();
      } else {
        res.end(JSON.stringify(response));
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`server listening on port, ${PORT}`);
});

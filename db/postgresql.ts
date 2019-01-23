import { Client } from "pg";
const client = new Client({
  user: "supersilent",
  host: "localhost",
  database: "errbnb",
  password: "",
  port: 5432
});
client.connect();

export async function getPhotos(location_id: Number, callback: Function) {
  const res: any = await client.query(
    "select * from listing inner join photos on listing.photo_id = photos.photo_id where location_id = $1",
    [location_id]
  );
  callback(null, res.rows);
}

// getPhotos(999999, () => {});

export async function insertPhotos(
  location_id: Number,
  photo_id: Number,
  url: String,
  caption: String,
  callback: Function
) {
  const res: any = await client.query(
    "insert into listing (location_id, photo_id ) values ($1,$2);",
    [location_id, photo_id]
  );
  const res2: any = await client.query(
    "insert into photos (photo_id, url, caption ) values ($1,$2,$3);",
    [photo_id, url, caption]
  );
  callback(null, res);
}

export async function updatePhotos(
  location_id,
  photo_id,
  url,
  caption,
  callback
) {}

export async function deletePhotos(location_id, photo_id, callback) {}

// insertPhotos(101, 0, 'localhost', 'test', () => {});
// insertPhotos(101, 2, 'localhost', 'test', function () {});
// getPhotos(100, () => {});

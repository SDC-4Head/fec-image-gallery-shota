const cassandra = require("cassandra-driver");

const client = new cassandra.Client({
    contactPoints: ["localhost"],
    localDataCenter: "datacenter1",
    keyspace: "errbnb"
});

const getPhotos = (location_id, callback) => {
    const query = 'SELECT * from listing  WHERE id=?';
    const params = [location_id];
    client.execute(query, params, (err, entry) => {
        if (err) {
            console.log(err);
            callback(err, null);
        } else {
            console.log(entry);
            callback(null, entry);
        }
    });
};

const insertPhotos = (location_id, photo_id, url, caption, callback) => {
    // const query = 'INSERT INTO errbnb.listing (location_id, photo_id, url, caption) VALUES (?, ?, ?, ?)';
    // client.execute(query, [location_id, photo_id, url, caption], (err, entry) => {
    //     if (err) {
    //         console.log(err);
    //         callback(err, null);
    //     } else {
    //         console.log(entry);
    //         callback(null, entry);
    //     }
    // });
    const query = `INSERT INTO errbnb.listing (location_id, photo_id, url, caption) VALUES (${location_id}, ${photo_id}, '${url}', '${caption}' )`;
    client.execute(query, (err, entry) => {
        if (err) {
            console.log(err);
            callback(err, null);
        } else {
            console.log(entry);
            callback(null, entry);
        }
    });
    // const query = "INSERT INTO errbnb.listing (location_id, photo_id, url, caption) VALUES (101, 1, 'test', 'test2')";
    // client.execute(query, (err, entry) => {
    //     if (err) {
    //         console.log(err);
    //         callback(err, null);
    //     } else {
    //         console.log(entry);
    //         callback(null, entry);
    //     }
    // });
};

// insertPhotos(101, 0, 'localhost', 'test', () => {});
insertPhotos(101, 2, 'localhost', 'test', () => {});

// getPhotos(100, () => {});

module.exports = {
    cassandra,
    getPhotos
};
// const client = new cassandra.Client()
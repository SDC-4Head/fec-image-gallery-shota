var cassandra = require("cassandra-driver");
var client = new cassandra.Client({
    contactPoints: ["localhost"],
    localDataCenter: "datacenter1",
    keyspace: "errbnb"
});
var getPhotos = function (location_id, callback) {
    var query = 'SELECT * from listing  WHERE id=?';
    var params = [location_id];
    client.execute(query, params, function (err, entry) {
        if (err) {
            console.log(err);
            callback(err, null);
        } else {
            console.log(entry);
            callback(null, entry);
        }
    });
};
var insertPhotos = function (location_id, photo_id, url, caption, callback) {
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
    var query = "INSERT INTO errbnb.listing (location_id, photo_id, url, caption) VALUES (" + location_id + ", " + photo_id + ", '" + url + "', '" + caption + "' )";
    client.execute(query, function (err, entry) {
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
insertPhotos(101, 2, 'localhost', 'test', function () {});
// getPhotos(100, () => {});
module.exports = {
    cassandra: cassandra,
    getPhotos: getPhotos
};
// const client = new cassandra.Client()
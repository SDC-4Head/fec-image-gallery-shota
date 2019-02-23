const faker = require('faker');
const cassandra = require("cassandra-driver");
const client = new cassandra.Client({
    contactPoints: ["localhost"],
    localDataCenter: "datacenter1",
    keyspace: "errbnb"
});

const fs = require('fs');

let writer = fs.createWriteStream('mock_data.csv');

let callback = () => {
    console.log('wrote all data to file');
}

var i = 1000000;
let encoding = 'utf8';
write();

function write() {
    var ok = true;
    do {
        let j = 10;
        i -= 1;
        while (j--) {
            data = `${i},${j},${faker.image.image()},${faker.lorem.words()}\n`;
            if (i === 0) {
                writer.write(data, encoding, callback);
            } else {
                ok = writer.write(data, encoding);
            }
        }
    }
    while (i > 0 && ok);
    if (i > 0) {
        writer.once('drain', write);
    }
}
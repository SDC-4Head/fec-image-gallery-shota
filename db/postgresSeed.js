const faker = require("faker");
const fs = require("fs");

let callback = () => {
  console.log("wrote all data to file");
};

let encoding = "utf8";
let writer2 = fs.createWriteStream("mock_data_postgres_photos.csv");

let i = 10000000;
write2();

function write2() {
  var ok = true;
  do {
    i--;
    data = `${i},${faker.image.image()},${faker.lorem.words()}\n`;
    if (i === 0) {
      writer2.write(data, encoding, callback);
    } else {
      ok = writer2.write(data, encoding);
    }
  } while (i > 0 && ok);
  if (i > 0) {
    writer2.once("drain", write2);
  }
}

let writer = fs.createWriteStream("mock_data_listing.csv");

let l = 1000000;
let k = 0;
write();
function write() {
  var ok = true;
  do {
    let j = 10;
    l--;
    while (j--) {
      data = `${l},${k++}\n`;
      if (l === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    }
  } while (l > 0 && ok);
  if (l > 0) {
    writer.once("drain", write);
  }
}

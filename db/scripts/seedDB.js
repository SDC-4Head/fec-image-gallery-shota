// const mongoose = require('mongoose');
const faker = require('faker');
const db = require('../index.js');
let count = 0;
let base_url = 'localhost';
// let base_url = 'https://s3-us-west-1.amazonaws.com';


const listingGenerator = function () {
  // bali
  var photoArr = [];
  for (var i = 1; i < 28; i++) {
    photoArr.push({
      url: `${base_url}/fec-errbnb/bali/bali${i}.jpg`,
      caption: faker.lorem.sentence()
    });
    var arr = photoArr.map(el => el);
  }
  var listing = new db.Listing({
    _id: count,
    photo: arr
  });
  listing.save();
  count++;
  //artisan
  photoArr = [];
  for (var i = 0; i < 16; i++) {
    photoArr.push({
      url: `${base_url}/fec-errbnb/artisan/art${i}.jpg`,
      caption: faker.lorem.sentence()
    });
    var arr = photoArr.map(el => el);
  }
  var listing = new db.Listing({
    _id: count,
    photo: arr
  });
  listing.save();
  count++;
  //cabana
  photoArr = [];
  for (var i = 0; i < 11; i++) {
    photoArr.push({
      url: `${base_url}/fec-errbnb/cabana/cabana${i}.jpg`,
      caption: faker.lorem.sentence()
    });
    var arr = photoArr.map(el => el);
  }
  var listing = new db.Listing({
    _id: count,
    photo: arr
  });
  listing.save();
  count++;
  //corner
  photoArr = [];
  for (var i = 0; i < 13; i++) {
    photoArr.push({
      url: `${base_url}/fec-errbnb/corner/corner${i}.jpg`,
      caption: faker.lorem.sentence()
    });
    var arr = photoArr.map(el => el);
  }
  var listing = new db.Listing({
    _id: count,
    photo: arr
  });
  listing.save();
  count++;
  //grey
  photoArr = [];
  for (var i = 0; i < 13; i++) {
    photoArr.push({
      url: `${base_url}/fec-errbnb/grey/grey${i}.jpg`,
      caption: faker.lorem.sentence()
    });
    var arr = photoArr.map(el => el);
  }
  var listing = new db.Listing({
    _id: count,
    photo: arr
  });
  listing.save();
  count++;
  //iceland
  photoArr = [];
  for (var i = 0; i < 15; i++) {
    photoArr.push({
      url: `${base_url}/fec-errbnb/iceland/iceland${i}.jpg`,
      caption: faker.lorem.sentence()
    });
    var arr = photoArr.map(el => el);
  }
  var listing = new db.Listing({
    _id: count,
    photo: arr
  });
  listing.save();
  count++;
  //luxury
  photoArr = [];
  for (var i = 0; i < 17; i++) {
    photoArr.push({
      url: `${base_url}/fec-errbnb/luxury/luxury${i}.jpg`,
      caption: faker.lorem.sentence()
    });
    var arr = photoArr.map(el => el);
  }
  var listing = new db.Listing({
    _id: count,
    photo: arr
  });
  listing.save();
  count++;
  //nautica
  photoArr = [];
  for (var i = 0; i < 16; i++) {
    photoArr.push({
      url: `${base_url}/fec-errbnb/nautica/nautica${i}.jpg`,
      caption: faker.lorem.sentence()
    });
    var arr = photoArr.map(el => el);
  }
  var listing = new db.Listing({
    _id: count,
    photo: arr
  });
  listing.save();
  count++;
  //outdoor
  photoArr = [];
  for (var i = 0; i < 19; i++) {
    photoArr.push({
      url: `${base_url}/fec-errbnb/outdoor/outdoor${i}.jpg`,
      caption: faker.lorem.sentence()
    });
    var arr = photoArr.map(el => el);
  }
  var listing = new db.Listing({
    _id: count,
    photo: arr
  });
  listing.save();
  count++;
  //relax
  photoArr = [];
  for (var i = 0; i < 13; i++) {
    photoArr.push({
      url: `${base_url}/fec-errbnb/relax/relax${i}.jpg`,
      caption: faker.lorem.sentence()
    });
    var arr = photoArr.map(el => el);
  }
  var listing = new db.Listing({
    _id: count,
    photo: arr
  });
  listing.save();
  count++;
  //sunny
  photoArr = [];
  for (var i = 0; i < 24; i++) {
    photoArr.push({
      url: `${base_url}/fec-errbnb/sunny/sunny${i}.jpg`,
      caption: faker.lorem.sentence()
    });
    var arr = photoArr.map(el => el);
  }
  var listing = new db.Listing({
    _id: count,
    photo: arr
  });
  listing.save();
  count++;
  //terrace
  photoArr = [];
  for (var i = 0; i < 18; i++) {
    photoArr.push({
      url: `${base_url}/fec-errbnb/terrace/terrace${i}.jpg`,
      caption: faker.lorem.sentence()
    });
    var arr = photoArr.map(el => el);
  }
  var listing = new db.Listing({
    _id: count,
    photo: arr
  });
  listing.save();
  count++;
  //theatre
  photoArr = [];
  for (var i = 0; i < 14; i++) {
    photoArr.push({
      url: `${base_url}/fec-errbnb/theatre/theatre${i}.jpg`,
      caption: faker.lorem.sentence()
    });
    var arr = photoArr.map(el => el);
  }
  var listing = new db.Listing({
    _id: count,
    photo: arr
  });
  listing.save();
  count++;
  //treehouse
  photoArr = [];
  for (var i = 0; i < 34; i++) {
    photoArr.push({
      url: `${base_url}/fec-errbnb/treehouse/treehouse${i}.jpg`,
      caption: faker.lorem.sentence()
    });
    var arr = photoArr.map(el => el);
  }
  var listing = new db.Listing({
    _id: count,
    photo: arr
  });
  listing.save();
  count++;
  //villa
  photoArr = [];
  for (var i = 0; i < 14; i++) {
    photoArr.push({
      url: `${base_url}/fec-errbnb/villa/villa${i}.jpg`,
      caption: faker.lorem.sentence()
    });
    var arr = photoArr.map(el => el);
  }
  var listing = new db.Listing({
    _id: count,
    photo: arr
  });
  listing.save();
  count++;
  //winter
  photoArr = [];
  for (var i = 0; i < 25; i++) {
    photoArr.push({
      url: `${base_url}/fec-errbnb/winter/winter${i}.jpg`,
      caption: faker.lorem.sentence()
    });
    var arr = photoArr.map(el => el);
  }
  var listing = new db.Listing({
    _id: count,
    photo: arr
  });
  listing.save();
  count++;
};

const seedDB = function () {
  for (let i = 0; i < 8; i++) {
    listingGenerator();
  }
};

seedDB();
create table listing (
    location_id int,
    photo_id int,
    url varchar,
    caption varchar,
    PRIMARY KEY (location_id, photo_id)
);\ COPY listing
FROM
    'mock_data.csv' DELIMITER ',';
select
    *
from
    listing
where
    location_id = 900000
    and photo_id = 0;
insert into
    listing (location_id, photo_id, url, caption)
values
    (1000000, 100, 'test', 'test2');CREATE INDEX location_index ON listing (location_id);CREATE INDEX photos_index ON photos (photo_id);create table listing (
        location_id int,
        photo_id int,
        PRIMARY KEY (location_id, photo_id)
    );create table photos (
        photo_id int,
        url varchar,
        caption varchar,
        PRIMARY KEY (photo_id)
    );\ COPY listing
FROM
    'mock_data_listing.csv' DELIMITER ',';\ COPY photos
FROM
    'mock_data_postgres_photos.csv' DELIMITER ',';
insert into
    listing (location_id, photo_id)
values
    (5000000, 100);
create keyspace errbnb with replication = {'class':'SimpleStrategy','replication_factor':1};
use errbnb;
create table listing (location_id int , photo_id int, url varchar, caption varchar, PRIMARY KEY (location_id, photo_id));

ALTER TABLE listing WITH caching = {'keys': 'ALL', 'rows_per_partition': 'ALL'};
ALTER TABLE listing WITH compaction = { 'class' : 'LeveledCompactionStrategy' };
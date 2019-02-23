select * from listing where location_id=500000 and photo_id=1;
insert into listing (location_id, photo_id, url, caption) values (1000000,100,'test','test2') ;

-- cass
TRACING ON
insert into listing (location_id, photo_id, url, caption) values (5000000,100,'test','test2') ;

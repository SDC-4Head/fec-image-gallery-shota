cqlsh < create.cql
node cassSeed.js
cqlsh -kerrbnb -e "COPY listing FROM 'mock_data.csv' WITH DELIMITER=',';"
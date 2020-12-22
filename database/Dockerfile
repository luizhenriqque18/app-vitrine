FROM mongo

WORKDIR /opt

COPY catalog.json .

CMD mongoimport --host mongodb --db linx --collection catalog --drop --file /opt/catalog.json

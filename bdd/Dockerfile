# Derived from official mysql image (our base image)
FROM mysql

# Add a database
ENV MYSQL_DATABASE test_unit

COPY ./Db_Scripts /docker-entrypoint-initdb.d/
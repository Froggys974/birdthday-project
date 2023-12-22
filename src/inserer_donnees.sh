#!/bin/bash

# Spécifiez les détails de la base de données MongoDB
DB_HOST=localhost
DB_PORT=27017
DB_NAME=apiBirthday
DB_COLLECTION=users

# Spécifiez le chemin vers votre fichier CSV
CSV_FILE=api/data/user.csv

# Utilisez mongoimport pour importer le fichier CSV dans la base de données
mongoimport --host $DB_HOST --port $DB_PORT --db $DB_NAME --collection $DB_COLLECTION --type csv --headerline --file $CSV_FILE

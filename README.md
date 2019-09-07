# Geocoder API

REST API for geocoder React Application

## Requirements

- [Node and npm](http://nodejs.org)
- MongoDB: Make sure you have your own local or remote MongoDB database URI configured in `config/database.js`

## Installation

1. Clone the repository
2. Install the application: `npm install`
3. Place your own MongoDB URI in `config/database.js`
4. Start the server: `npm start`
5. View in browser at `http://localhost:8080`
6. MongoDB should have a DB `gmap`

# Design

1. Object Modeling : mongoose
2. Data Model : mongoose data model `marker`
3. Server : express server
4. Logger : `morgan`

# API Docs

### GET `/api/markers`

Retrieve all the markers from the mongo db collection

### DELETE - `/api/markers/:_id`

`_id` : mongo db id for identifying the row.
This will delete the row item from the DB and returns all the markers from the DB

### POST - `/api/markers`

`_id` : mongo db id for identifying the row.
This will add a marker to the DB and returns all the markers from the DB

### PUT - `/api/markers/:_id`

`_id` : mongo db id for identifying the row.
params : updates needs to be done on the entity
This will update the marker with the id `_id` and returns all the markers from the DB

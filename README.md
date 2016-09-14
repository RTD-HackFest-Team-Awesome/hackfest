# RTD Hackfest

### Install dependencies

`npm install`

### Fix broken dependency

Open up `./node_modules/gtfsdb/lib/download.js`

and add this immediately below line 244:

`if (!agencyEntryId) return Promise.resolve();`

### Create gtfs DB:

`node gtfs_update.js`

### Start the app

`npm start`

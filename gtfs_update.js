const knexconfig = require('./knexfile');
const knex = require('knex')(knexconfig);

const gtfsdb = require('gtfsdb')(knex);
const gtfsconfig = require('./gtfs_config.js');

gtfsdb
  .download(gtfsconfig)
  .catch(console.error)
  .finally(() => {
      process.exit();
  });

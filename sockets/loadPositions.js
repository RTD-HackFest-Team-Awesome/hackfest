'use strict';

const realtime = require('rtd-realtime');
const diff = require('rfc6902-json-diff');

let data = [];

function loadPositions(callback) {
  realtime.VehiclePositions.load((err, feed) => {
    data.push(feed);

    if (data.length == 2) {
      try {
        const patch = diff(data[0].entity, data[1].entity);

        if (patch.length > 0) {
          callback(data[1]);
        }

        data = [data[1]];
      } catch (e) {
        console.log('error diffing...', e);
      } finally {
        setTimeout(() => {
          loadPositions(callback);
        }, 6000);
      }
    }


  });
}

module.exports = loadPositions;

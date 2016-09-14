var realtime = require('rtd-realtime');
var diff = require("rfc6902-json-diff");

var data = [];
var noChanges = 0;

function loadPositions() {
  realtime.VehiclePositions.load( (err,feed) => {
      data.push(feed);

      if(data.length == 2) {
        var patch = diff(data[0].entity, data[1].entity);

        if(patch.length > 0) {
          console.log(noChanges, ' with no change');
          console.log('patches', patch.length);
          console.log(data[0].entity.length, data[0].entity.length)
          noChanges = 0;
          // console.log('patch', patch);
          data = [data[1]];
        } else {
          data = [data[1]];
          noChanges++;
          console.log('no change...');
        }
      }

      setTimeout(loadPositions, 6000);
  });
}

loadPositions();

setTimeout(loadPositions, 6000);

console.log('waiting...');

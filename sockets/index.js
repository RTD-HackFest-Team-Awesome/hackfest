const loadPositions = require('./loadPositions');

function initialize(io) {
  io.on('connection', connected);

  loadPositions((data) => {
    console.log('got data', data.entity.length);
    io.emit('data', data);
  });
}

function connected(socket) {
  socket.emit('message', 'RTD HACKFEST 2016!!!');
}

module.exports = {
  initialize
};

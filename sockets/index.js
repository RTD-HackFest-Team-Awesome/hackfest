function initialize(io) {
  io.on('connection', connected);
}

function connected(socket) {
  socket.emit('news', {
    hello: 'world'
  });

  socket.on('eventName', eventName);
  socket.on('anotherEventName', anotherEventName);
}

function eventName(data) {
  /* eslint-disable no-console */
  console.log(data);
  /* eslint-enable*/
}

function anotherEventName(data) {
  /* eslint-disable no-console */
  console.log(data);
  /* eslint-enable*/
}

module.exports = {
  initialize
};

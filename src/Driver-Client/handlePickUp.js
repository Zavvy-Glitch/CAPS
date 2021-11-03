'use strict';

// const parcel = require('../Hub/events.js');
const client = require('socket.io-client');

function connect(namespace) {
  return client(`http://localhost:3030/${namespace}`);
}

const messageClient = client('http://localhost:3030/messages');

const defaultClient = client('http://localhost:3030');

function handlePickUp(payload) {
  console.log(`DRIVER: picked up ${payload.orderId}`);
  messageClient.emit('in-transit', payload);

  console.log(`DRIVER: delivered ${payload.orderId}`);
  messageClient.emit('delivered', payload);
}

module.exports = handlePickUp;

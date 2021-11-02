'use strict';

const parcel = require('../Hub/events.js');

function handlePickUp(payload) {
  console.log(`'DRIVER: picked up ${payload.orderId}`);
  parcel.emit('in-transit', payload);

  console.log(`DRIVER: delivered ${payload.orderId}`);
  parcel.emit('delivered', payload);
}

module.exports = handlePickUp;

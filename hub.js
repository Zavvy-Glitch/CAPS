'use strict';

const parcel = require('./src/events.js')

const driver = require('./src/driver.js')
const vendor = require('./src/vendor.js')


parcel.on('message', (payload) => {
  console.log('Parcel Recieved', payload.event);
})

parcel.emit('Package Ready for Pickup', driver);
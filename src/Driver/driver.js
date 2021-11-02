'use strict'

const parcel = require('../Hub/events.js');
const handlePickUp = require('./handlePickUp.js');

parcel.on('pickup', handlePickUp)


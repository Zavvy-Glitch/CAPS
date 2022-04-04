'use strict';

const client = require('socket.io-client');
const handlePickUp = require('./handlePickUp.js');

const messageClient = client('http://localhost:3030/messages');

messageClient.on('pickup', handlePickUp);
messageClient.emit('delivered', handlePickUp);

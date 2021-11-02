'use strict';

const parcel = require('../Hub/events.js');
const logDelivery = require('./logDelivery.js')
const faker = require('faker');

const store = faker.fake("{{company.companyName}}");
const id = faker.fake("{{datatype.uuid}}");
const randomName = faker.name.findName();
const randomAddress = faker.fake("{{address.streetAddress}}, {{address.cityName}}, {{address.state}} {{address.zipCodeByState}}");


parcel.on('delivered', logDelivery);

function pickup() {
  let payload = {
    'store': store,
    'orderId': id,
    'customer': randomName,
    'address':randomAddress,
  };
  parcel.emit('pickup', payload);
}

pickup();
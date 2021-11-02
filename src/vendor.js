'use strict';

const parcel = require('./events.js');
const faker = require('faker');

const store = faker.fake("{{company.companyName}}");
const id = faker.fake("{{random.uuid}}");
const timeStamp = faker.fake("{{time.recent}}")
const randomName = faker.name.findName();
const randomAddress = faker.fake("{{address.streetAddress}}, {{address.cityName}}, {{address.state}} {{address.zipCodeByState}}");


parcel.emit('message', {
  "event":"Pick-Up",
  "payload": {
    "store":console.log(`${store}`),
    "orderID":console.log(`${id}`),
    "time":console.log(`${timeStamp}`),
    "customer":console.log(`${randomName}`),
    "address":console.log(`${randomAddress}`),
  }
})
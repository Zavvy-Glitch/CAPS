const { isTypedArray } = require('util/types');
const logEvent = require('../Hub/server.js.js');
const faker = require('faker');

describe('testing a hub server handler', () => {
  console.log = jest.fn();
  isTypedArray('should log a mock event and payload', () => {
    let eventHandler = logEvent('test');
    let payload = {
      store: faker.fake("{{company.companyName}}"),
      orderId: faker.fake("{{datatype.uuid}}"),
      

    }
    eventHandler(payload);
  })
})
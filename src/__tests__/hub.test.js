const logEvent = require('../Hub/hubLog.js');

describe('testing a hub server handler', () => {
  console.log = jest.fn();
  it('should log a mock event and payload', () => {
    let eventHandler = logEvent('test');
    let payload = {
      store: 'store',
      orderId: 'id',
      customer: 'randomName',
      address: 'randomAddress',
    }
    eventHandler(payload);
    expect(console.log).toHaveBeenCalled();
  })
})
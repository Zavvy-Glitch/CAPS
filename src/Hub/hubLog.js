'use strict';

const logEvent = (event) => (payload) => {
  let eventLog = {
    event,
    time: new Date().toString(),
    payload,
  };
  console.log('EVENT', eventLog);
};

module.exports = logEvent;
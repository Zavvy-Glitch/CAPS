'use strict';

const parcel = require('./events.js');
const logEvent = require('./hubLog.js');

parcel.on('pickup', logEvent('pickup'));
parcel.on('in-transit', logEvent('in-transit'));
parcel.on('delivered', logEvent('delivered'));

require('../Driver/driver.js');
require('../Vendor/vendor.js');
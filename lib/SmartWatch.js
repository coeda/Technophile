let Watch = require('./Watch');
let Tablet = require('./Tablet');

function SmartWatch(){
  Watch.call(this);
}

SmartWatch.prototype = Object.create(Watch.prototype);
function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}
extend(SmartWatch.prototype, Tablet.prototype);


module.exports = SmartWatch;
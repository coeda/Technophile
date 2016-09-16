let Phone = require('./Phone');
let GameConsole = require('./GameConsole');
let WebBrowser = require('./WebBrowser');
let Tablet = require('./Tablet');

function SmartPhone(phoneNumber){
  //Invokes class constructors
  Phone.call(this, phoneNumber);
  GameConsole.call(this, 'Smart Phone');
}
//Sets parent class
SmartPhone.prototype = Object.create(Phone.prototype);
//extend function to add functions to class
function extend(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
  return destination;
}
//adds functions from classes to current class.
extend(SmartPhone.prototype, GameConsole.prototype);
extend(SmartPhone.prototype, WebBrowser.prototype);
extend(SmartPhone.prototype, Tablet.prototype);

module.exports = SmartPhone;
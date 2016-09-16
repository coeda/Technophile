let GameConsole = require('./GameConsole');
function NintendoDS(){
  let gameConsole = new GameConsole('Nintendo DS');
  return gameConsole;
}
module.exports = NintendoDS;
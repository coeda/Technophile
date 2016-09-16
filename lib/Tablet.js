function Tablet(x, y){
  this.coordinates = {
    x: null,
    y: null};
  this.touch = function(x,y ){
    this.coordinates.x = x;
    this.coordinates.y = y;
        return this.coordinates;
  };

}
module.exports = Tablet;
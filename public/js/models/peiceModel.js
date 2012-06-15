// *******************************************************
// peiceModel.js
// ------- included in the main app -----------
// module to hold our gamePeice model
// will create a game peice with a type, position and team
// *******************************************************

function gamePeice(type, position, team){
  this.pos = position || new THREE.Vector3(0,0,0);
  this.type = type || null;
  this.team = team || null;
}
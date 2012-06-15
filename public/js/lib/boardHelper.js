// ******************************************************
// boardHelper.js
//  ----- included in the main app ---------
// module to hold info about our game board
// will create a square game board of x levels
// ******************************************************

var boardHelper=function(){

  // private variables
  var board         = new THREE.Object3D,
      SQ_LEN        = 50,
      BOARD_WIDTH   = 4,
      BOARD_LEVELS  = 1,
      totalSq       = null;
      sqPerLevel    = null;

  // private methods
  var createSquare = function(n){
    var ypos = (Math.floor(n/sqPerLevel)) ;
    var zpos = (n%BOARD_WIDTH)*SQ_LEN;
    var xpos = (Math.floor(n/BOARD_WIDTH)-(ypos*BOARD_WIDTH))*SQ_LEN;

    //alternate the color black or white
    if(Math.floor(n/BOARD_WIDTH)%2){
      n=(n%2)?'0x000000':'0xffffff';
    }else{
      n=(n%2)?'0xffffff':'0x000000';
    }

    // create the square mesh
    var block = new THREE.CubeGeometry(SQ_LEN,10,SQ_LEN)
    var mat   = new THREE.MeshLambertMaterial({color:n,opacity:0.7});
    var plane = new THREE.Mesh(block,mat);

    // rotate it to lay flat on the screen
    plane.position.z=zpos-((BOARD_WIDTH/2)*SQ_LEN);
    plane.position.x=xpos-(BOARD_WIDTH/2)*SQ_LEN;
    plane.position.y=(ypos-1)*-400;

    // return the finished square
    return plane;
  }

  // exported module
  return {

    // public methods
    create: function(boardWidth,sqLen,levels,scene){

      // set private variables
      BOARD_WIDTH   = boardWidth;
      BOARD_LEVELS  = levels;
      SQ_LEN        = sqLen;
      totalSq       = BOARD_WIDTH * BOARD_WIDTH * BOARD_LEVELS;
      sqPerLevel    = BOARD_WIDTH * BOARD_WIDTH;

      // create the actual square meshes and add them to board
      for(var i=0;i<totalSq;i++){
        board.add(createSquare(i));
      }
      board.castShadow = true;
      board.receiveShadow = true;
      scene.add(board);
    },

    getPos: function(sq){
      //add some more crap here
      var square = board.children[sq];
      var pos = new THREE.Vector3;
      pos.set(square.position.x,square.position.y,square.position.z)
      return pos;
    }
  }
};

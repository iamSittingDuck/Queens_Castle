var appCore=function(app){
  //private variables
  var VIEW_HEIGHT     = 0,
      VIEW_WIDTH      = 0,
      container       = null;
  // exported module
  return{
    // public variables
    renderer: new THREE.WebGLRenderer({antialias:true}),
    scene: new THREE.Scene,
    gameBoard: new boardHelper,
    player: new cameraHelper,
    clock: new THREE.Clock,
    lights: new lightHelper,
    // public methods
    init: function(domElem){
      // set the DOM element to attach to
      this.container = domElem;
      this.renderer.setClearColorHex(0x410000, 1)
      this.renderer.autoClear = true;

      // setting the shadows
      this.renderer.shadowMapEnabled = true;
      this.renderer.softShadow = true;

      // set the view width and height
      this.VIEW_WIDTH = domElem.innerWidth();
      this.VIEW_HEIGHT = domElem.innerHeight();

      // create the game board
      this.gameBoard.create(8,100,3,this.scene)
    },
    startRender: function(renderFunc){
      this.renderer.setSize(this.VIEW_WIDTH,this.VIEW_HEIGHT);
      this.container.append(this.renderer.domElement)
      renderFunc();
    },
    getViewAspect: function(){
      return (this.VIEW_WIDTH/this.VIEW_HEIGHT)
    }
  }
}
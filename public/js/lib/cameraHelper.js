// *****************************************************
// cameraHelper.js
//   ------- included in the main core ---------
//  module to hold info about the camera and controls
//  will create a FirstPerson camera with controls
// *****************************************************

var cameraHelper = function(){

  // private variables

  // private methods
  function createControls(obj){
    controls = new THREE.FirstPersonControls(obj);
    controls.movementSpeed = 500;
    controls.rollSpeed = Math.PI/5;
    controls.autoForward = false;
    controls.mouseDragOn = false;
    controls.domElement = app.container;
    return controls;
  }

  //exported module
  return{
    camera: null,
    controls: null,
    create: function(angle,asp,near,far){
      // create the camera
      this.camera = new THREE.PerspectiveCamera(angle,asp,near,far)
      // create the controls for the camera
      this.controls = createControls(this.camera);
      app.scene.add(this.camera);

    },
    move: function(x,y,z){
      this.camera.position.x = x;
      this.camera.position.y = y;
      this.camera.position.z = z;
    }
  }
}
// APP

// variables
var app=null;

function APP(){
  app = new appCore;
  app.init($('#appView'))

  // set up our camera with controls and set the start point
  app.player.create(45,app.getViewAspect(),0.1,10000)
  app.player.move(1000,550,1200);

  // add a light to the scene
  app.lights.create(0xffffff,10,5000,0,0,0);
  app.lights.placeLights();

  // attemping to add some fog
  app.scene.fog = new THREE.Fog(0x410000,1000, 3000)

  // add some debug
  addDebug();

  // start rendering
  app.startRender(render);
}

//TODO: check the config
function render(){
  var delta = app.clock.getDelta();
  app.player.controls.update(delta);
  app.lights.lights[0].position=app.player.camera.position
  app.player.camera.lookAt(app.scene.position)
  app.renderer.render(app.scene,app.player.camera);
  window.requestAnimationFrame(render, app.renderer.domElement);
}

// ******************** DEBUG *************************
function addDebug(){
  // add some x,y,z helpers for debug
  var coordshelper = new THREE.AxisHelper();
  coordshelper.position.y = 10;
  coordshelper.position.z = 10;
  coordshelper.position.x = 10;
  app.scene.add(coordshelper)


  // add viewing box to light
  //app.lights.lights[0].shadowCameraVisible = true;

  // add a cube for ref
  var cube = new THREE.Mesh(new THREE.CubeGeometry(50,50,50),new THREE.MeshLambertMaterial({color: 0xf0c00f}))
  cube.position =app.gameBoard.getPos(3)
  cube.position.y += 25;
  cube.castShadow = true;
  cube.receiveShadow = true;
  app.scene.add(cube)

  // log some useful info the the console
  console.log("app", app)
  console.log("scene: ",  app.scene);
  console.log("camera: ", app.player.camera);
  console.log("controls: ", app.player.controls);
}
// ****************************************************

APP();
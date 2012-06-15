// ***************************************************
// lightHelper.js
//   --------- included in app core -------------
// module to hold lights and there Data
// will create lights and stuff
// ***************************************************

var lightHelper = function (){

  // private variables

  // exported module
  return{
    lights: [],
    create: function(hex,intensity,brightness,x,y,z){
      var light = new THREE.SpotLight(hex,intensity,brightness);
      light.castShadow = true;
      light.position.set(x,y,z);
      this.lights.push(light);
    },
    placeLights: function(){
      for(var light in this.lights){
        app.scene.add(this.lights[light]);
      }
    }
  }
}
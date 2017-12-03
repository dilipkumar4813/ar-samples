var World = {
	playing: false,
	
	locationChanged: function locationChangedFn(lat, lon, alt, acc) {

		// var geoLoc = new AR.GeoLocation(3.1079021,101.6328436);
		// var location = new AR.RelativeLocation(geoLoc, 4, 0, -4.5);
		var location = new AR.RelativeLocation(null, 4, 0, -4.5);

		World.modelGeoLocation = new AR.GeoLocation(lat, 
			lon + 0.0005, 
			AR.CONST.UNKNOWN_ALTITUDE);	
			// load model from relative path or url
			World.model = new AR.Model("assets/dino_2.wt3", {
				// fired when 3D model loaded successfully
				onLoaded: function() {
					// define model as geoObject
					World.GeoObject = new AR.GeoObject(World.modelGeoLocation, {
						drawables: {
							cam: [World.model]
						},
					onEnterFieldOfVision: function() {
						console.log('model visible');
						World.modelVisible = true;
					},
					onExitFieldOfVision: function() {
						console.log('model no longer visible');
						World.modelVisible = false;
					},
					onClick: function() {
  						if(!World.playing){
  							var sound = new AR.Sound("assets/bird_short.mp3", {
  								onLoaded : function(){ },
  								onError : function(){
    								alert("Could not play music")
    							},
  							});
  					
  							sound.onFinishedPlaying = function(){
  								AR.platform.sendJSONObject({foo:"bar"});
  								World.playing = false;
  							};
  					
  							sound.play();
  							World.playing = true;	
  					}
  				}
				});
			},
			onError: function(err) {
				console.error(‘unexpected error occurred ’ + err);
			}
		});
	}
};

AR.context.onLocationChanged = World.onLocationChanged;

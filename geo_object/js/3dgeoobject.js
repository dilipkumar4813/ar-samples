var World = {
	loaded: false,
	rotating: false,
	playing: false,

	init: function initFn() {
		this.createModelAtLocation();
	},

	createModelAtLocation: function createModelAtLocationFn() {

		// var geoLoc = new AR.GeoLocation(3.1079021,101.6328436);
		// var location = new AR.RelativeLocation(geoLoc, 4, 0, -4.5);
		var location = new AR.RelativeLocation(null, 4, 0, -4.5);

		/*
			Next the model object is loaded.
		*/
		var modelDragon = new AR.Model("assets/dino_2.wt3", {
			onLoaded: this.worldLoaded,
			scale: {
				x: 1,
				y: 1,
				z: 1
			},
			rotate: {
    			x: 0.0,
    			y: -50.0,
    			z: 0.0
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

        var indicatorImage = new AR.ImageResource("assets/indi.png");

        var indicatorDrawable = new AR.ImageDrawable(indicatorImage, 0.1, {
            verticalAnchor: AR.CONST.VERTICAL_ANCHOR.TOP
        });

		/*
			Putting it all together the location and 3D model is added to an AR.GeoObject.
		*/
		var obj = new AR.GeoObject(location, {
            drawables: {
               cam: [modelDragon],
               indicator: [indicatorDrawable]
            }
        });
	},

	worldLoaded: function worldLoadedFn() {
		World.loaded = true;
		var e = document.getElementById('loadingMessage');
		e.parentElement.removeChild(e);
	}
};

World.init();

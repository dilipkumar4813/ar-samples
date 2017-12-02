var World = {
	loaded: false,
	rotating: false,

	init: function initFn() {
		this.createModelAtLocation();
	},

	createModelAtLocation: function createModelAtLocationFn() {

		/*
			First a location where the model should be displayed will be defined. This location will be relativ to the user.	
		*/

		//a relative location being 5 meters south, 0 meters west and -5 meters lower than current position of the user
		var location = new AR.RelativeLocation(null, 4, 0, -4);
		
		var geoLoc = new AR.GeoLocation(47.77317, 13.069929, 320.);

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
    			x: 180.0,
    			y: 0.0,
    			z: 0.0
  			},
			translate: {
    			x: 5,
    			y: 0,
  				z: 0
  			},
  			onClick : function() {
    			//something happens
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

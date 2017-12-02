var World = {
	init: function initFn(){
		this.imageOverlayFn();
	},
	createOverlays: function createOverlaysFn() {

		this.targetCollectionResource = new AR.TargetCollectionResource("assets/magazine.wtc", {
        });

        this.tracker = new AR.ImageTracker(this.targetCollectionResource, {
            onTargetsLoaded: this.worldLoaded,
            onError: function(errorMessage) {
            	alert(errorMessage);
            }
        });

		var imgOne = new AR.ImageResource("assets/imageOne.png");
		var overlayOne = new AR.ImageDrawable(imgOne, 1, {
			translate: {
				x:-0.15
			}

		});

		/*var sound = new AR.Sound("assets/jellylude.mp3", {
  		
  		});*/


		var pageOne = new AR.ImageTrackable(this.tracker, "*", {
			drawables: {
				cam: overlayOne
			},
			onImageRecognized: this.removeLoadingBar(),
            onError: function(errorMessage) {
            	alert(errorMessage);
            }
		});
	},
	removeLoadingBar: function() {
		if (!World.loaded) {
			var e = document.getElementById('loadingMessage');
			e.parentElement.removeChild(e);
			World.loaded = true;
		}
	},

	worldLoaded: function worldLoadedFn() {
		var cssDivLeft = " style='display: table-cell;vertical-align: middle; text-align: right; width: 50%; padding-right: 15px;'";
		var cssDivRight = " style='display: table-cell;vertical-align: middle; text-align: left;'";
		document.getElementById('loadingMessage').innerHTML =
			"<div" + cssDivLeft + ">Scan Target &#35;1 (surfer):</div>" +
			"<div" + cssDivRight + "><img src='assets/surferOne.png'></img></div>";
	}
};

World.init();
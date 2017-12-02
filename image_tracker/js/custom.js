var World = {
	init: function initFn(){
		this.imageOverlayFn();
	},
	imageOverlay: function imageOverlayFn(){

		this.targetCollectionResource = new AR.TargetCollectionResource("assets/magazine.wtc", {
        });

        this.tracker = new AR.ImageTracker(this.targetCollectionResource, {
            onTargetsLoaded: this.worldLoaded,
            onError: function(errorMessage) {
            	alert(errorMessage);
            }
        });

		var imageOne = new AR.ImageResource("assets/imageOne.jpg");

		var imageDrawable1 = new AR.ImageDrawable(imageOne, 1, {
			transalte:{
				x:-0.15
			}
		});

		var pageOne = new AR.ImageTrackable(this.tracker,'*',{
			drawables: {
				cam: imageDrawable1
			},
			onImageRecognized: this.playSound(),
			onError: function(errorMessage){
				alert(errorMessage);
			}
		});
	},
	playSound: function playSoundFn(){
		var sound = new AR.Sound("assets/jellylude.mp3", {
  			onLoaded : function(){ 
  				sound.play(); 
  			},
  			onError : function(){
    			alert("could not play sound");
    		},
		});
	}
};

World.init();
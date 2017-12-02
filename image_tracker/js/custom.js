var World = {
	init: function initFn(){
		this.imageOverlayFn();
	},
	imageOverlay: function imageOverlayFn(){

		this.targetCollectionOne = AR.TargetCollectionResource("assets/magazine.wtc",{});

		this.trackerOne = AR.ImageTarget(this.targetCollectionOne, {
			onTargetsLoaded: this.worldLoaded
		});

		var imageOne = AR.ImageResource("assets/imageOne.jpg");

		var imageDrawable1 = AR.ImageDrawable(imageOne, 1, {
			transalte:{
				x:-0.15
			}
		});

		var pageOne = AR.ImageTrackable(this.trackerOne,'*',{
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
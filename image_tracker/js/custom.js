var World = {
	init: function initFn(){
		this.imageOverlayFn();
	},
	imageOverlay: function imageOverlayFn(){

		this.targetCollectionOne = AR.TargetCollectionResource("assets/magazineOne.wtc");
		this.targetCollectionTwo = AR.TargetCollectionResource("assets/magazineTwo.wtc");

		this.trackerOne = AR.ImageTarget(this.targetCollectionOne, {
			onTargetsLoaded: this.worldLoaded
		});

		this.trackerTwo = AR.ImageTarget(this.targetCollectionTwo, {
			onTargetsLoaded: worldLoaded
		});

		var imageOne = AR.ImageResource("assets/imageOne.jpg");
		var imageTwo = AR.ImageResource("assets/imageTwo.jpg");

		var imageDrawable1 = AR.ImageDrawable(imageOne, 1, {
			transalte:{
				x:-0.15
			}
		});

		var imageDrawable2 = AR.ImageDrawable(imageTwo, 1, {
			translate:{
				x:-0.15
			}
		});

		var pageOne = AR.ImageTrackable(this.trackerOne,'*',{
			onImageRecognized: this.playSound();
		});

		var pageTwo = AR.ImageTrackable(this.trackerTwo,'*',{
			onImageRecognized: this.playSound();
		});
	},
	playSound: function playSoundFn(){
		var sound = new AR.Sound("assets/jellylude.mp3", {
  			onLoaded : function(){sound.play();},
  			onError : function(){
    			alert("could not play sound");
    		},
		});
	}
};

World.init();
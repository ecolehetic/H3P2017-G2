"use strict";

var feeder={
	
	init : function(){
		model.getCollection(function(tracks){
			console.log(tracks); 
		});
	},
	
	move : function(e){
		e.preventDefault();
		var offset=e.changedTouches[0].pageX-feeder.start;
		if(offset>0){
			UI.move(this,offset);
		}
	},
	
	end : function(e) {
		var offset=e.changedTouches[0].pageX-feeder.start;
		if(offset<200){
			UI.resetPos(this)
		}
		else{
			UI.addTrack(this);
			var track={};
			track.src=this.getAttribute('data-tracksrc');
			track.name=this.getAttribute('data-trackname')
			model.addTrack(track,function(){
				 UI.confirmAdded();
			});
		}
	},
	
	start : function(e){
		feeder.start=e.touches[0].pageX;
	}
		

}
feeder.init();
"use strict";

var partyPlayer={
	init : function(){
		var self=this;
		self.player=document.getElementById('player');
		model.getPlaylist(function(tracks){
			for(var i in tracks){
				UI.render(tracks[i],function(li){
					self.renderTrack(tracks[i]);
				});
			}
			model.listen(function(track){
				 self.renderTrack(track);
			});
		});
	},
	
	renderTrack : function(track){
		UI.render(track,function(li){
			li.addEventListener('click',partyPlayer.playTrack,false);
		});
<<<<<<< HEAD
	},
=======
	}
>>>>>>> d99c1cdc645b6b6d749fbc48aea02287d4da7772
	
	playTrack : function(e){
		e.preventDefault();
		partyPlayer.player.pause();
		var track=this.getAttribute('data-tracksrc');
		partyPlayer.player.setAttribute('src',track);
		partyPlayer.player.load();
		partyPlayer.player.play();
		UI.togglePlaying(this);
	}
}
partyPlayer.init();


















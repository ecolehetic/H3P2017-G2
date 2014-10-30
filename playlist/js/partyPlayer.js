"use strict";

var partyPlayer={
	init : function(){
		model.getPlaylist(function(tracks){
			for(var i in tracks){
				UI.render(tracks[i],function(){
					// do stuff...
				});
			}
			model.listen(function(track){
				console.log(track); 
			});
		});
	}
}
partyPlayer.init();
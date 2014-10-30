"use strict";

var model={
	getPlaylist : function(callback){
		this.socket= io.connect('http://macbook-maraboutee.local:3000');
		this.socket.emit('getPlaylist');
		this.socket.on('playlist',function(tracks){
			callback.call(this,tracks);
		});
	},
	
	listen : function(callback){
		this.socket.on('added',function(track){
			callback.call(this,track);
		});
	}
	
}












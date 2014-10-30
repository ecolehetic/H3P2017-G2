var party={
	init : function(){
		// create socket
		this.io = require('socket.io').listen(3000);
		// écoute un event connection lorsqu'un script ouvre un socket
		this.io.on('connection',this.listen);
		
		this.playlist = [];
	},
	
	listen : function(socket){ 
		// écoute de l'event getCollection envoyée par le model mobile.
		socket.on('getCollection',function(){
			var collection= require('./collection.json');
			socket.emit('collection',collection); 
		});
		
		socket.on('add',function(track){
			party.playlist.push(track);
			party.io.emit('added',track);		
		});
		
		socket.on('getPlaylist',function(){
			socket.emit('playlist',party.playlist);
		});
		
		
		
		
		
		
	}
	
};
party.init();







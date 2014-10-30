"use strict";

var model={
	
	getCollection : function(callback){
		this.socket= io.connect('http://macbook-maraboutee.local:3000');
		this.socket.emit('getCollection');
		this.socket.on('collection',function(tracks){
			callback.call(this,tracks);
		});
	}
	
}
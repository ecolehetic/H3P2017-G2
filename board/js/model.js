"use strict";

var model={
	
	init:function(){
		// do stuff...
	},
	
	add:function(card,callback){
		localStorage.setItem(card.date,JSON.stringify(card));
		if(localStorage.getItem(card.date)){
			callback.call(this);
		}
	},
	
	delete:function(){
		// do stuff...
	}
	
}
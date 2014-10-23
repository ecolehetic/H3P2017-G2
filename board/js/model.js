"use strict";

var model={
	
	init:function(callback){
		for(var i in localStorage){
			callback.call(this,JSON.parse(localStorage.getItem(i))); 
		} 
	},
	
	add:function(card,callback){
		localStorage.setItem(card.date,JSON.stringify(card));
		if(localStorage.getItem(card.date)){
			callback.call(this);
		}
	},
	
	delete:function(key,callback){
		localStorage.removeItem(key);
		if(!localStorage.getItem(key)){
			callback.call(this);
		}
		
	}
	
}











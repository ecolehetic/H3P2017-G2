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
		
	},
	getUserLocation : function(callback){
		var userPos={};
		navigator.geolocation.getCurrentPosition(
			function(position){
				userPos.lat=position.coords.latitude;
				userPos.lng=position.coords.longitude;
				callback.call(this,userPos);
			},
			function(){
				userPos.lat=48.857713;
				userPos.lng=2.347271;
				callback.call(this,userPos);
			},
			{enableHighAccuracy:true}
		);
	},
	
	geocode : function(address,callback){
		var geocoder=new google.maps.Geocoder();
		geocoder.geocode({"address":address},function(data,status){
			if(status=='OK'){
				var latLng=data[0].geometry.location;
				callback.call(this,latLng);
			}
		});
	}
	
}











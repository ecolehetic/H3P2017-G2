"use strict";

var model={
	
	load : function(params){
		return new Promise(function(resolve,reject){
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = ensureReadiness;
			function ensureReadiness() {
					if(xhr.readyState === 4) { 
						if(xhr.status==200){
							resolve(xhr);
						}
						else{
							reject();
						}
					}
			}
			xhr.open('GET', params.url, true);
			xhr.responseType = params.type||'text';
			xhr.send('');
		});
	},
	
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
		var self=this;
		navigator.geolocation.getCurrentPosition(
			function(position){
				userPos.lat=position.coords.latitude;
				userPos.lng=position.coords.longitude;
				callback.call(this,userPos);
			},
			function(){
				self.load({url:'js/pos.json',type:'json'}).then(
					function(xhr){
						userPos.lat=xhr.response.coords.latitude;
						userPos.lng=xhr.response.coords.longitude; 
					},
					function(){console.log('nulle part'); }
					);
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
	},
	

}











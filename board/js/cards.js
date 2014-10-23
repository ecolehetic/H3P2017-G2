"use strict";

var card={};
var addCard=document.getElementById('addCard');
addCard.addEventListener('submit',getCard,false);
document.getElementById('addLocation').addEventListener('click',addLocation,false);

model.init(function(card){
	UI.render(card);
});

function getCard (e) {
	e.preventDefault();
  var name=document.querySelector("input[name='name']").value;
  var date=document.querySelector("input[name='date']").value;
  if(!name){return;}
	var cardDate=!date?new Date().getTime():new Date(date).getTime()
	card.name=name;
	card.date=cardDate;

	model.add(card,function(){
		//render UI
		console.log('added');
		UI.render(card); 
	});

	
	
}

function deleteCard (e) {
	e.preventDefault();
	var self=this;
	var key=self.getAttribute('data-key');
	if(!key){return;}
	model.delete(key,function(){
		// delete node from DOM.
		console.log('deleted'); 
		UI.delete(self);
	});
	
}

function addLocation(e){
	e.preventDefault();
	var userPos={};
	navigator.geolocation.getCurrentPosition(
		function(position){
			userPos.lat=position.coords.latitude;
			userPos.lng=position.coords.longitude;
			drawMap(userPos);
		},
		function(){
			userPos.lat=48.857713;
			userPos.lng=2.347271;
			drawMap(userPos);
		},
		{enableHighAccuracy:true}
	);
}

function drawMap(userPos){
	var center=new google.maps.LatLng(userPos.lat,userPos.lng);
	var settings={
		zoom:17,
		center:center,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
	};
	new google.maps.Map(document.querySelector('#map > div'),settings);
	document.getElementById('map').classList.toggle('on');
}


















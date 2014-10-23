"use strict";

var card={};

var addCard=document.getElementById('addCard');
addCard.addEventListener('submit',getCard,false);
document.getElementById('addLocation').addEventListener('click',addLocation,false);
document.getElementById('geocoder').addEventListener('submit',geoCoder,false);


model.init(function(card){
	console.log(this);
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
	UI.toggleLoader();
	model.getUserLocation(function(userPos){
		UI.drawMap(userPos,function(){
			UI.toggleMap().toggleLoader();
		});
	});
}

function geoCoder(e){
	e.preventDefault();
	var address=document.querySelector("input[name='address']").value;
	if(!address){return;}
	model.geocode(address,function(latLng){
		UI.setMarker(latLng);
		UI.setCenter(latLng);
	});
}



















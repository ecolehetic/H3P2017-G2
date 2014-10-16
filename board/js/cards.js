"use strict";

var card={};
var addCard=document.getElementById('addCard');
addCard.addEventListener('submit',getCard,false);

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
		UI.render(card,function(deleteButton){
			deleteButton.addEventListener('click',deleteCard,false);
		}); 
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


















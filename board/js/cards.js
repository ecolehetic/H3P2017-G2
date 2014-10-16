"use strict";

var card={};
var addCard=document.getElementById('addCard');
addCard.addEventListener('submit',getCard,false);

function getCard (e) {
	e.preventDefault();
  var name=document.querySelector("input[name='name']").value;
  var date=document.querySelector("input[name='date']").value;
  if(!name){return;}
	/*if(!date){
		var cardDate=new Date().getTime();
	}
	else{
		var cardDate=new Date(date).getTime();
	}*/
	var cardDate=!date?new Date().getTime():new Date(date).getTime()
	card.name=name;
	card.date=cardDate;
	localStorage.setItem(card.date,JSON.stringify(card));
	var div=document.createElement('div');
	div.classList.add('card');
	var d=new Date(card.date);
	var date=d.getFullYear()+'/'+('0'+(d.getMonth()+1)).slice(-2)+'/'+('0'+d.getDate()).slice(-2);
	var dateSpan=document.createElement('span');
	dateSpan.classList.add('date');
	var dateText=document.createTextNode(date);
	dateSpan.appendChild(dateText);
	var textSpan=document.createElement('span');
	textSpan.classList.add('text');
	var text=document.createTextNode(card.name);
	textSpan.appendChild(text);
	var deleteButton=document.createElement('a');
	deleteButton.classList.add('deleteButton');
	deleteButton.setAttribute('href','');
	var deleteText=document.createTextNode('[delete]');
	deleteButton.appendChild(deleteText);
	div.appendChild(dateSpan);
	div.appendChild(textSpan);
	div.appendChild(deleteButton);
	var board=document.getElementById('board');
	board.appendChild(div);
	
}







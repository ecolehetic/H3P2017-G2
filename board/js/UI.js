"use strict";

var UI={
	
	render:function(card){
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
		deleteButton.setAttribute('data-key',card.date);
		var deleteText=document.createTextNode('[delete]');
		deleteButton.appendChild(deleteText);
		div.appendChild(dateSpan);
		div.appendChild(textSpan);
		div.appendChild(deleteButton);
		var board=document.getElementById('board');
		board.appendChild(div);
		deleteButton.addEventListener('click',deleteCard,false);
		//callback.call(this,deleteButton);
	},
	
	delete : function(elmt){
		elmt.parentNode.remove();
	},
	
	drawMap : function(userPos,callback){
		var center=new google.maps.LatLng(userPos.lat,userPos.lng);
		var settings={
			zoom:17,
			center:center,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
		};
		new google.maps.Map(document.querySelector('#map > div'),settings);
		callback.call(this);
	},
	
	toggleMap: function(){
		document.getElementById('map').classList.toggle('on');
		return this;
	},
	
	toggleLoader : function(){
		document.querySelector('.loader').classList.toggle('on');
		return this;
	}
	
}













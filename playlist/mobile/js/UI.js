"use strict";

var UI={
	render: function(tracks,callback){
		for (var i in tracks){
			var li=document.createElement('li');
			li.setAttribute('data-trackSrc',tracks[i].src);
			li.setAttribute('data-trackName',tracks[i].name);
			var text=document.createTextNode(tracks[i].name);
			li.appendChild(text);
			document.querySelector('ul').appendChild(li);
			callback.call(this,li);
		}
	},
	
	resetPos : function(elmt){
		elmt.style.left=0
		elmt.classList.remove('adding');
	},
	
	addTrack : function(elmt){
		elmt.style.left='500px';
	},
	
	move : function(elmt,offset){
			elmt.style.left = offset + 'px';
			elmt.classList.add('adding');
	},
	
	confirmAdded : function(){
		document.querySelector('.added').classList.toggle('on');
		setTimeout(function(){document.querySelector('.added').classList.toggle('on');},800);
	}
}
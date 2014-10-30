"use strict";

var UI={
	render: function(track,callback){
			var li=document.createElement('li');
			li.setAttribute('data-tracksrc',track.src);
			var a=document.createElement('a');
			a.setAttribute('href','');
			var icon=document.createElement('i');
			var text=document.createTextNode(track.name);
			a.appendChild(icon);
			a.appendChild(text);
			li.appendChild(a);
			document.querySelector('ul').appendChild(li);
			window.getComputedStyle(li).position;
			li.classList.add('adding');
			li.style.left=0;
			callback.call(this,li);
	},
	
	togglePlaying : function(elmt){
		if(document.querySelector('.playing')){
			document.querySelector('.playing').classList.remove('playing');
		}
		elmt.classList.add('playing');
		
	}
	
}
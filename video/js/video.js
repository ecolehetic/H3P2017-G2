'use strict';

var player={};

player.video=document.getElementById('video');
player.button=document.getElementById('button');
player.pB=document.getElementById('progressBar');
player.button.classList.add('loading');
player.video.load();

player.setVideoTime = function(e) {
	e.stopPropagation();
	//console.log(e); 
	player.video.currentTime=e.offsetX*player.video.duration/this.offsetWidth;
}

player.playProgress = function() {
	var self=this;
	var progress=self.currentTime*100/self.duration;
	document.querySelector('.progress').style.width=progress+'%';
}

player.playPause = function(e){
	//console.log(e); 
	if(e.type=='canplaythrough'){
		player.video.removeEventListener('canplaythrough',player.playPause,false);
	}
	player.button.classList.remove('loading');
	//var self=this;
	if(player.video.paused){
		player.video.play();
		player.button.classList.add('play');
	}
	else{
		player.video.pause();
		player.button.classList.remove('play');
	}
}

player.video.addEventListener('canplaythrough',player.playPause,false);
window.addEventListener('click',player.playPause,false);
player.video.addEventListener('timeupdate',player.playProgress,false);
player.pB.addEventListener('click',player.setVideoTime,false);

console.log(player); 
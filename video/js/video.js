'use strict';

var video=document.getElementById('video');
var button=document.getElementById('button');
button.classList.add('loading');
video.load();

video.addEventListener('canplaythrough',playPause,false);
window.addEventListener('click',playPause,false);
video.addEventListener('timeupdate',playProgress,false);

function playProgress () {
	var self=this;
	var progress=self.currentTime*100/self.duration;
	document.querySelector('.progress').style.width=progress+'%';
}

function playPause(e){
	button.classList.remove('loading');
	//var self=this;
	if(video.paused){
		video.play();
		button.classList.add('play');
	}
	else{
		video.pause();
		button.classList.remove('play');
	}
}
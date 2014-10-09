'use strict';

var video=document.getElementById('video');
var button=document.getElementById('button');
var pB=document.getElementById('progressBar');
button.classList.add('loading');
video.load();

video.addEventListener('canplaythrough',playPause,false);
window.addEventListener('click',playPause,false);
video.addEventListener('timeupdate',playProgress,false);
pB.addEventListener('click',setVideoTime,false);

function setVideoTime (e) {
	e.stopPropagation();
	console.log(e); 
	video.currentTime=e.offsetX*video.duration/this.offsetWidth;
}


function playProgress () {
	var self=this;
	var progress=self.currentTime*100/self.duration;
	document.querySelector('.progress').style.width=progress+'%';
}

function playPause(e){
	console.log(e); 
	if(e.type=='canplaythrough'){
		video.removeEventListener('canplaythrough',playPause,false);
	}
	
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
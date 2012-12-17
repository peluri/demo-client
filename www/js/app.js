function pauseMedia()
{
	alert('in app.js');
	   var video = document.getElementsByTagName('video')[0];
	   if (video.paused)
	     video.play();
	   else
	     video.pause();
}


function playAudio()
{
	    var audio = new Audio();
	    
		if(audio.canPlayType("audio/mp3"))
			audio.src = "media/1.mp3";
		else if(audio.canPlayType("audio/ogg"))
			audio.src = "media/1.ogg";
			
			audio.play
}




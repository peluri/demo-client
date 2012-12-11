/**
 * @author eluri
 */
function playAudio()
{
	alert(1)
	    var audio = new Audio();
	    
		if(audio.canPlayType("audio/mp3"))
			audio.src = "media/1.mp3";
		else if(audio.canPlayType("audio/ogg"))
			audio.src = "media/1.ogg";
			
			audio.play
}

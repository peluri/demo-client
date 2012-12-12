/**
 * @author eluri
 */

$(document).ready(function ()
		{  
			alert(12)
			setTimeout(function ()
			{  
			    var w1 = $(window).width();  
			    $('meta[name="viewport"]').remove();//remove previous metatag (no reason just so we keep it clean)  
			    var px = 480;//target width to achieve  
			    var x = 320/w1;// calculate ratio (320 is the width set by viewport on head->meta,  
			    var out = Math.floor(px*x);//outcome..  
			    // var out = Math.floor( (32/ w1) * 480 )// alternative shortcode remove the 3 lines above <img src="http://www.jqui.net/wp-includes/images/smilies/icon_smile.gif" alt=":)" class="wp-smiley">   
			    $('<meta name="viewport" id="the_vp_special" content="width=320,initial-scale=1.0,target-densityDPI='+out+'dpi">').appendTo('head');//insert the new meta tag on the head   
			},250);  
		}); 
		
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

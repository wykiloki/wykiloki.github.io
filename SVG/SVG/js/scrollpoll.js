/*
TITLE: 
AUTHOR: Sungkwon Kudo
PURPOSE: 
LAST MODIFIED BY: Sungkwon Kudo (SK)
MODIFICATION HISTORY: 
02 March 2017: Date created. 
*/

$ (document).ready(function(){

// Code for tracking window position
window.addEventListener('scroll', function(e){
	// Flat amount of how much of the page is scrolled
	var delta = document.body.scrollTop || document.documentElement.scrollTop;

	document.getElementById("display").innerHTML = delta;
	console.log(delta);
})


// Attempt to turn code into something a bit more reusable
/**
ScrollDrawEffect()
IN: String
	A css selector of the SVG to be scrolled through.
OUT: void
**/
function ScrollDrawEffect(SVG){
	// Selects the SVG Path and gets its total length to work with.
	var path = document.querySelector(SVG);
	var pathLength = path.getTotalLength();

	path.style.strokeDasharray=pathLength + ' ' + pathLength;
	path.style.strokeDashoffset = pathLength;
	
	window.addEventListener('scroll', function(e){
		// Find percentage based on size of document.
		var percentScroll = (document.documentElement.scrollTop + document.body.scrollTop) 
		/ (document.documentElement.scrollHeight - document.documentElement.clientHeight);

		// Length to offset the dashes
		var drawLength=pathLength*percentScroll;
		
		path.style.strokeDashoffset = pathLength - drawLength;
	})
}

function generateRandomPathSVG(height, width, node, id){
    var svg = document.createElement("svg");
    var path= document.createElement("path");
    
    path.id=id;
    
    svg.appendChild(path);
    node.appendChild(svg);
}

var node=document.getElementById("test");
generateRandomPathSVG(1,1, node, "asdf");
ScrollDrawEffect("#arc");
}); // end (document).ready()
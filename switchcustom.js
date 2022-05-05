var max = parseInt(prompt("please Enter Maximum Point (1-5)","5"))
var min = parseInt(prompt("please Enter Minimum Point (1-5)","1"))
if((max>5 || max < 1) || (min>5 || min < 1)){
	alert("Dude , please , yang bener dong!");
}else{
	var sd = document.querySelectorAll('[id=radioX]');
	console.log(sd.length);
	for (var i = 0; sd.length; i++) {
	  var dx = sd[i].querySelectorAll('[class=opt]');
	  var ran = getRndInteger(min-1,max-1);
	  if(ran<0) ran = 2;
	  console.log(dx.length,ran)
	  dx[ran].checked=true;
	};
}
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
var sd = document.querySelectorAll('[id=radioX]');
console.log(sd.length);
for (var i = 0; sd.length; i++) {
  var dx = sd[i].querySelectorAll('[class=opt]');
  var ran = getRndInteger(2,dx.length-1);
  if(ran<0) ran = 2;
  console.log(dx.length,ran)
  dx[ran].checked=true;
};
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
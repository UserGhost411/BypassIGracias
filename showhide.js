var sd = document.querySelectorAll('[id=radioX]');
for (var i = 0; sd.length; i++) {
  var dx = sd[i].querySelectorAll('[class=opt]');
  var ran = Math.floor(Math.random() * dx.length-2);
  dx[ran].checked=true;
};

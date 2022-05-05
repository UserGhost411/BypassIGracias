function runSwitchjs1() {
  chrome.tabs.executeScript({
    file: 'switch.js'
  });
}
function runSwitchjs2() {
  chrome.tabs.executeScript({
    file: 'switch1.js'
  });
}
function runSwitchjs3() {
  chrome.tabs.executeScript({
    file: 'switchcustom.js'
  });
}
function hideshowx() {
  var p = document.getElementById("kuis");
  p.classList.toggle('show');
}

document.getElementById('gotoweb').addEventListener('click', function(){  window.open("http://bypass-grasias.rf.gd"); });
document.getElementById('clickme1').addEventListener('click', runSwitchjs1);
document.getElementById('clickme2').addEventListener('click', runSwitchjs2);
document.getElementById('clickme3').addEventListener('click', runSwitchjs3);
document.getElementById('hideshow').addEventListener('click', hideshowx);
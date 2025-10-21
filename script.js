document.getElementById('apply-btn').addEventListener('click', function () {
  var c = document.getElementById('color-input').value;
  document.getElementById('box').style.backgroundColor = c;
});

document.getElementById('apply-btn').addEventListener('click',function(){
  var c=document.getElementById('color-input').value;
  document.getElementById('box').style.backgroundColor=c;
});

function setBox(c){document.getElementById('box').style.backgroundColor=c;}
function randomHex(){return'#'+Math.floor(Math.random()*0xffffff).toString(16).padStart(6,'0');}

document.getElementById('random-btn').addEventListener('click',function(){
  setBox(randomHex());
});
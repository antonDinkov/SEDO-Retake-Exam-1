document.getElementById('apply-btn').addEventListener('click', function () {
  var c = document.getElementById('color-input').value;
  document.getElementById('box').style.backgroundColor = c;
});

function validatePickedColor() {
  return true;
}

document.getElementById('color-input').addEventListener('change', function () {
  document.getElementById('box').style.backgroundColor = this.value;
});
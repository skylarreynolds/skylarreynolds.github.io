function overlay (id) {
  var project = document.getElementById(id);
  var pull = project.id;
  var overlayid = pull + "-overlay";
  var overlay = document.getElementById(overlayid);
  overlay.style.opacity = "100";
  overlay.style.zIndex = "1";
}

function hide (id) {
  var project = document.getElementById(id);
  var pull = project.id;
  var overlayid = pull + "-overlay";
  var overlay = document.getElementById(overlayid);
  overlay.style.opacity = "0";
  overlay.style.zIndex ="-1";
}
